import React, { useContext, useEffect, useState } from "react";
import Card from "./GridComponents/Card";
import FiltersContext from "./FiltersContext";
import { AppContext } from "../../AppContext";

function GridContent() {
  const [filteredData, setFilteredData] = useState([]);
  const { queryParams } = useContext(FiltersContext);
  const { data } = useContext(AppContext);
  const [page, setPage] = useState(0);
  const [pageItems, setPageItems] = useState([]);
  useEffect(() => {
    data && setFilteredData(data);
    data &&
      setFilteredData(
        data.filter((el) => {
          return queryParams.get("r") !== "all"
            ? el.region.toLowerCase().includes(queryParams.get("r")) &&
                el.name.common.toLowerCase().includes(queryParams.get("q"))
            : el.name.common.toLowerCase().includes(queryParams.get("q"));
        })
      );
    setPage(0);
    setPageItems(filteredData.slice(0, 20));
  }, [queryParams, data]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    page !== 0 && filteredData
      ? setPageItems((prev) => [
          ...prev,
          ...filteredData.slice(page * 20, page * 20 + 20),
        ])
      : setPageItems(filteredData.slice(0, 20));
  }, [page, filteredData]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className={`grid place-content-center gap-10 mt-10 mx-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${
        pageItems?.length === 0 ? "h-screen" : ""
      }`}
    >
      {pageItems?.map((el, key) => {
        return (
          <React.Fragment key={key}>
            <Card data={el} />
          </React.Fragment>
        );
      })}
    </main>
  );
}

export default GridContent;

import React, { useContext, useEffect, useState } from "react";
import Card from "./GridComponents/Card";
import FiltersContext from "./FiltersContext";
import { AppContext } from "../../AppContext";

function GridContent() {
  const [filteredData, setFilteredData] = useState();
  const { queryParams } = useContext(FiltersContext);
  const { data } = useContext(AppContext);

  useEffect(() => {
    setFilteredData(data);

    data &&
      setFilteredData(
        data.filter((el) => {
          return queryParams.get("r") !== "all"
            ? el.region.toLowerCase().includes(queryParams.get("r")) &&
                el.name.toLowerCase().includes(queryParams.get("q"))
            : el.name.toLowerCase().includes(queryParams.get("q"));
        })
      );
  }, [queryParams, data]);

  return (
    <main
      className={`grid place-content-center gap-10 mt-10 mx-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${
        filteredData?.length === 0 ? "h-screen" : ""
      }`}
    >
      {filteredData?.map((el, key) => {
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

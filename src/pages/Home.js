import React from "react";
import Search from "./homeComponents/Search";
import Filter from "./homeComponents/Filter";
// import GridContent from "./homeComponents/GridContent";
import { FiltersContextProvider } from "./homeComponents/FiltersContext";
import LoadSpin from "./homeComponents/images/Loading.webp";
const GridContent = React.lazy(() => import("./homeComponents/GridContent"));

function Home() {
  return (
    <div>
      <FiltersContextProvider>
        <div className="flex flex-col mx-3 md:mx-10 items-start mt-10 gap-3 justify-between md:items-center md:flex-row">
          <Search />
          <Filter />
        </div>
        <React.Suspense
          fallback={
            <div className="flex justify-center items-center w-full bg-white">
              <img src={LoadSpin} alt="" />
            </div>
          }
        >
          <GridContent />
        </React.Suspense>
      </FiltersContextProvider>
    </div>
  );
}

export default Home;

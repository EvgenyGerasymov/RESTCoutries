import React, { useContext } from "react";
import FiltersContext from "./FiltersContext";
import ThemeContext from "../../ThemeContext";
import AppContext from "../../AppContext";

function Filter() {
  const { queryParams, setQueryParams } = useContext(FiltersContext);
  const { theme } = useContext(ThemeContext);
  const { toogle, setToogle } = useContext(AppContext);
  function HoveringFilters() {
    return (
      <div
        className={`absolute top-full mt-1 left-0 w-full py-3 pl-8 rounded-md  z-10 ${
          theme
            ? " text-white bg-darkBlue_dmElements  shadow-black "
            : "text-darkBlue_lmText shadow-gray-200 bg-white "
        } shadow-md `}
      >
        <ul className="flex-col gap-4 items-center justify-start ">
          <li
            className="cursor-pointer"
            onClick={() => {
              setQueryParams((queryParams) => {
                queryParams.set("r", "africa");
                return queryParams;
              });
            }}
          >
            Africa
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              setQueryParams((queryParams) => {
                queryParams.set("r", "america");
                return queryParams;
              });
            }}
          >
            America
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              setQueryParams((queryParams) => {
                queryParams.set("r", "asia");
                return queryParams;
              });
            }}
          >
            Asia
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              setQueryParams((queryParams) => {
                queryParams.set("r", "europe");
                return queryParams;
              });
            }}
          >
            Europe
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              setQueryParams((queryParams) => {
                queryParams.set("r", "oceania");
                return queryParams;
              });
            }}
          >
            Oceania
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="mb-5 w-fit inline-block relative">
      <button
        className={`rounded-md  pl-5 py-3 after:content-['⌄'] after:ml-16 after:relative after:-top-1 after:right-0 after:mr-2 after:text-2xl after:align-middle ${
          theme
            ? " text-white bg-darkBlue_dmElements  shadow-black "
            : "text-darkBlue_lmText shadow-gray-200 bg-white "
        } shadow-md `}
        onClick={() => {
          setToogle((prev) => !prev);
        }}
      >
        {queryParams.get("r") !== "all"
          ? queryParams.get("r").charAt(0).toUpperCase() +
            queryParams.get("r").slice(1)
          : "Filter by region"}
      </button>
      {queryParams.get("r") !== "all" && (
        <button
          className="ml-5  w-[20px] h-[20px] bg-closeIcon bg-center bg-no-repeat bg-cover"
          onClick={() => {
            setQueryParams((queryParams) => {
              queryParams.set("r", "all");
              return queryParams;
            });
            setToogle((prev) => !prev);
          }}
        ></button>
      )}
      {toogle && HoveringFilters()}
    </div>
  );
}

export default Filter;

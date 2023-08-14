import React, { useContext } from "react";
import FiltersContext from "./FiltersContext";
import ThemeContext from "../../ThemeContext";

function Search() {
  const { setQueryParams } = useContext(FiltersContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="block w-full md:w-[40%]  ">
      <input
        type="text"
        className={`w-full  shadow-md rounded-md h-[50px] px-24 text-sm ${
          theme
            ? " text-white bg-darkBlue_dmElements  shadow-black outline-none"
            : "text-darkBlue_lmText shadow-gray-200 outline-darkGray "
        } shadow-md `}
        placeholder="Search for a country..."
        defaultValue=""
        onChange={(e) => {
          setQueryParams((queryParams) => {
            queryParams.set("q", e.target.value.toLocaleLowerCase());
            return queryParams;
          });
        }}
      />
      <div className="w-[20px] h-[20px] bg-searchIcon bg-no-repeat bg-center bg-contain relative -top-9 left-10"></div>
    </div>
  );
}

export default Search;

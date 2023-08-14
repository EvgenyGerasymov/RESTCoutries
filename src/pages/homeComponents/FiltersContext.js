import React, { createContext } from "react";

import { useSearchParams } from "react-router-dom";
export const FiltersContext = createContext(null);
export const FiltersContextProvider = ({ children }) => {
  const [queryParams, setQueryParams] = useSearchParams({ r: "all", q: "" });

  const value = {
    queryParams,
    setQueryParams,
  };
  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};
export default FiltersContext;

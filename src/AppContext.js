import axios from "axios";
import React, { createContext } from "react";
import { useQuery } from "@tanstack/react-query";

const countriesData = {};
export const AppContext = createContext(null);
export const AppContextProvider = ({ children }) => {
  const { data } = useQuery(["countries"], () => {
    console.log("here");
    return axios.get("https://restcountries.com/v3.1/all").then((res) => {
      res.data.forEach((country) => {
        countriesData[country.cca3] = country;
      });
      return res.data;
    });
  });

  const value = {
    data,
    countriesData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppContext;

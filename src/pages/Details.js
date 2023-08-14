import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../AppContext";
import ThemeContext from ".././ThemeContext";

function Details() {
  const nav = useNavigate();
  const { countriesData } = useContext(AppContext);
  const { country } = useParams();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mt-10 lg:max-w-[90%] mx-auto">
      <button
        className={`rounded-md pl-5 pr-7 pb-1  ml-5 text-center text-lg ${
          theme
            ? " text-white bg-darkBlue_dmElements  shadow-black "
            : "text-darkBlue_lmText shadow-gray-400 bg-white "
        } shadow-md `}
        onClick={() => {
          nav("/");
        }}
      >
        <span className="text-4xl">←</span> Back
      </button>
      <div
        className={`flex flex-col mx-5 mt-16 lg:flex-row lg:justify-between lg:gap-5  ${
          theme ? " text-white   " : "text-darkBlue_lmText  "
        }`}
      >
        <div className="self-center">
          <img
            src={countriesData[country]?.flag}
            alt=""
            className=" lg:w-full "
          />
        </div>
        <section className=" mt-5 self-start md:self-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-5 ">
            {countriesData[country]?.name || "-"}
          </h2>
          <div className=" text-left md:flex md:items-start md:justify-between md:gap-20">
            <div className="flex flex-col gap-3 justify-center items-start ">
              <h3 className="text-lg font-semibold">
                Native name:
                <span className="text-lg font-normal ml-3">
                  {countriesData[country]?.nativeName || "-"}
                </span>
              </h3>
              <h3 className="text-lg font-semibold">
                Population:
                <span className="text-lg font-normal ml-3">
                  {countriesData[country]?.population.toLocaleString("en-US") ||
                    "-"}
                </span>
              </h3>
              <h3 className="text-lg font-semibold">
                Region:
                <span className="text-lg font-normal ml-3">
                  {countriesData[country]?.region || "-"}
                </span>
              </h3>
              <h3 className="text-lg font-semibold">
                Sub region:
                <span className="text-lg font-normal ml-3">
                  {countriesData[country]?.subregion || "-"}
                </span>
              </h3>
              <h3 className="text-lg font-semibold">
                Capital:
                <span className="text-lg font-normal ml-3">
                  {countriesData[country]?.capital || "-"}
                </span>
              </h3>
            </div>
            <div className="flex flex-col gap-3 justify-center items-start mt-5 lg:mt-0">
              <h3 className="text-xl font-semibold">
                Top Level Domain:
                <span className="text-lg font-normal ml-3">
                  {countriesData[country]?.topLevelDomain?.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue + ",",
                    ""
                  ) || "-"}
                </span>
              </h3>
              <h3 className="text-xl font-semibold">
                Currensies:
                <span className="text-lg font-normal ml-3">
                  {countriesData[country]?.currencies?.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.name + ",",
                    ""
                  ) || "-"}
                </span>
              </h3>
              <h3 className="text-xl font-semibold">
                Languages:
                <span className="text-lg font-normal ml-3">
                  {countriesData[country]?.languages?.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.name + ",",
                    ""
                  ) || "-"}
                </span>
              </h3>
            </div>
          </div>

          {countriesData[country]?.borders && (
            <div className="md:flex md:justify-between md:items-start my-5 w-full">
              <h3 className="font-bold text-3xl  md:text-xl">
                Border Counrties
              </h3>
              <div className=" grid place-content-center gap-5  mb-10 mt-5 md:m-0 grid-cols-3">
                {countriesData[country]?.borders?.map((elm, key) => {
                  return (
                    <button
                      className={`rounded-md  text-center  py-3 lg:py-1 px-1 overflow-clip ${
                        theme
                          ? " text-white bg-darkBlue_dmElements  shadow-black "
                          : "text-darkBlue_lmText shadow-gray-400 bg-white "
                      } shadow-md `}
                      key={key}
                      onClick={() => {
                        nav(`/${countriesData[elm].alpha3Code}/details`);
                      }}
                    >
                      {countriesData[elm].name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Details;

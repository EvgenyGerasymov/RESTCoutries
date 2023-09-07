import React, { useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../AppContext";
import ThemeContext from ".././ThemeContext";

function Details() {
  const nav = useNavigate();
  const ref = useRef(null);
  const { countriesData } = useContext(AppContext);
  const { country } = useParams();
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div className=" lg:max-w-[90%] mt-5 lg:mx-auto mx-4">
      <button
        ref={ref}
        className={`rounded-md pl-5 pr-7 py-1 text-center text-lg ${
          theme
            ? " text-white bg-darkBlue_dmElements  shadow-black "
            : "text-darkBlue_lmText shadow-gray-400 bg-white "
        } shadow-md `}
        onClick={() => {
          nav("/");
        }}
      >
        <span className="text-4xl leading-[0px]">←</span> Back
      </button>
      <div
        className={`flex flex-col  mt-16 lg:flex-row lg:justify-around lg:gap-10  ${
          theme ? " text-white   " : "text-darkBlue_lmText  "
        }`}
      >
        <div className="self-center">
          <img
            src={countriesData[country]?.flags?.svg}
            alt=""
            className=" lg:w-full lg:max-h-[700px] lg:max-w-[700px] "
          />
        </div>
        <section className=" mt-5 self-start md:self-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-5 ">
            {countriesData[country]?.name.common || "-"}
          </h2>
          <div className=" text-left md:flex md:items-start md:justify-between md:gap-20">
            <div className="flex flex-col gap-3 justify-center items-start ">
              <h3 className="text-lg font-semibold">
                Native name:
                <span className="text-lg font-normal ml-3">
                  {countriesData[country]?.name.nativeName[
                    Object.keys(countriesData[country]?.name.nativeName)[0]
                  ].common || "-"}
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
                  {countriesData[country]?.capital.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue + ",",
                    ""
                  ) || "-"}
                </span>
              </h3>
            </div>
            <div className="flex flex-col gap-3 justify-center items-start mt-5 lg:mt-0">
              <h3 className="text-xl font-semibold">
                Top Level Domain:
                <span className="text-lg font-normal ml-3">
                  {countriesData[country]?.tld?.reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue + " , ",
                    ""
                  ) || "-"}
                </span>
              </h3>
              <h3 className="text-xl font-semibold">
                Currensies:
                <span className="text-lg font-normal ml-3">
                  {(countriesData[country] &&
                    Object.keys(countriesData[country]?.currencies)?.reduce(
                      (accumulator, currentValue) =>
                        accumulator + currentValue + ",",
                      ""
                    )) ||
                    "-"}
                </span>
              </h3>
              <h3 className="text-xl font-semibold">
                Languages:
                <span className="text-lg font-normal ml-3">
                  {(countriesData[country] &&
                    Object.values(countriesData[country]?.languages)?.reduce(
                      (accumulator, currentValue) =>
                        accumulator + currentValue + ",",
                      ""
                    )) ||
                    "-"}
                </span>
              </h3>
            </div>
          </div>

          {countriesData[country]?.borders && (
            <div className="md:flex md:justify-between md:gap-5 md:items-start my-5 w-full">
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
                        nav(`/${countriesData[elm]?.cca3}/details`);
                      }}
                    >
                      {countriesData[elm]?.name.common}
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

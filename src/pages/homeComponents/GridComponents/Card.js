import React from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../../ThemeContext";
import { useContext } from "react";
function Card(props) {
  const nav = useNavigate();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`max-w-[400px] rounded-md overflow-hidden ${
        theme
          ? " text-white bg-darkBlue_dmElements  shadow-black "
          : "text-darkBlue_lmText shadow-gray-200 bg-white "
      } shadow-md `}
      onClick={() => {
        nav(`/${props.data.alpha3Code}/details`);
      }}
    >
      <img src={props.data.flag} alt="" className="mb-5" />
      <div className="pl-7 pb-7">
        <h2 className="text-2xl font-bold mb-5">{props.data.name}</h2>
        <div className="flex flex-col gap-3 justify-center items-start mg-5">
          <h3 className="text-xl font-semibold">
            Population:
            <span className="text-lg font-normal ml-3">
              {props.data.population.toLocaleString("en-US") || "-"}
            </span>
          </h3>
          <h3 className="text-xl font-semibold">
            Region:
            <span className="text-lg font-normal ml-3">
              {props.data.region || "-"}
            </span>
          </h3>
          <h3 className="text-xl font-semibold">
            Capital:
            <span className="text-lg font-normal ml-3">
              {props.data.capital || "-"}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Card;

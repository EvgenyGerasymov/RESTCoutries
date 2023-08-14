import React, { useContext } from "react";
import DarkModeimg from "./images/moon.svg";
import LightModeimg from "./images/sun.svg";
import ThemeContext from "./ThemeContext";

function Heading() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header
      className={`flex justify-between items-center ${
        theme
          ? " text-white bg-darkBlue_dmElements  shadow-black"
          : "text-darkBlue_lmText shadow-gray-200"
      } p-7 shadow-md `}
    >
      <h1 className=" font-extrabold ">Where in the world?</h1>
      <div
        className="flex justify-center items-center gap-2 w-fit cursor-pointer"
        onClick={() => {
          setTheme((prev) => !prev);
        }}
      >
        <img
          src={theme ? LightModeimg : DarkModeimg}
          alt=""
          className="max-w-[22px]"
        />
        <p className="font-bold text-xs whitespace-nowrap">
          {theme ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </header>
  );
}

export default Heading;

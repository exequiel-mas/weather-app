import React, { useContext } from "react";
import NavBar from "./Navbar";
import LogoCurrent from "./LogoCurrent";
import TempCurrent from "./TempCurrent";
import FooterCurrent from "./FooterCurrent";
import { ThemeContext } from "../../context/ThemeContext";
import { CoordsContext } from "../../context/CoordsContext";
import "../../styles/currentWeather.scss";

function CurrentWeather() {
  const { weatherData, handleSelectedDay, selectedDay } =
    useContext(CoordsContext);
  const { isDark } = useContext(ThemeContext);
  const weather = weatherData[selectedDay];

  return (
    <div
      className={`currentWeather-${
        isDark ? "dark dark" : "light light"
      }-bg-box`}
      onClick={() => handleSelectedDay(0)}
    >
      <div className="bodyCurrent">
        <NavBar />
        <LogoCurrent drawDescription={`${weather?.weather[0].description}`} />
        <TempCurrent />
        <FooterCurrent />
      </div>
    </div>
  );
}

export default CurrentWeather;

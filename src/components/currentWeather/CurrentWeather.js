import React, { useContext } from "react";
import NavBar from "./Navbar";
import LogoCurrent from "./LogoCurrent";
import TempCurrent from "./TempCurrent";
import FooterCurrent from "./FooterCurrent";
import { ThemeContext } from "../../context/ThemeContext";
import { CoordsContext } from "../../context/CoordsContext";
import "../../styles/currentWeather.scss";
import { BeatLoader } from "react-spinners";

function CurrentWeather() {
  const { weatherData, selectedDay, loadingWeatherData, errorWeatherData } =
    useContext(CoordsContext);
  const { isDark } = useContext(ThemeContext);
  const weather = weatherData[selectedDay];

  return (
    <div
      className={`currentWeather-${
        isDark ? "dark dark" : "light light"
      }-bg-box`}
    >
      {!loadingWeatherData ? (
        <div>
          <NavBar />
          <LogoCurrent drawDescription={`${weather?.weather[0].description}`} />
          <TempCurrent />
          <FooterCurrent />
          {errorWeatherData && <h2 className="msgError">{errorWeatherData}</h2>}
        </div>
      ) : (
        <div className="loaderContainer">
          <BeatLoader color="white" />
        </div>
      )}
    </div>
  );
}

export default CurrentWeather;

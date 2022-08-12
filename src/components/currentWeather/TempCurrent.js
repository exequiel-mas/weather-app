import React from "react";
import "../../styles/TempCurrent.scss";
import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext.js";
import { kelvinToCelsius } from "../../utils/weatherConversion";
import { ThemeContext } from "../../context/ThemeContext";

const TempCurrent = () => {
  const { weatherData, selectedDay } = useContext(CoordsContext);
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="tempCurrent">
      <p className={`tempValue ${isDark ? "dark" : "light"}-pri-text`}>
        {kelvinToCelsius(weatherData[selectedDay]?.main.temp)}
      </p>

      <p className={`tempUnity ${isDark ? "dark" : "light"}-sec-text`}>°C</p>
    </div>
  );
};

export default TempCurrent;

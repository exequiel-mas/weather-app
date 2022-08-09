import React from "react";
import "../../styles/TempCurrent.scss";
import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext.js";
import { kelvinToCelsius } from "../../utils/weatherConversion";

const TempCurrent = () => {
  const { weatherData, selectedDay } = useContext(CoordsContext);

  return (
    <div className="tempCurrent">
      <p className="tempValue">
        {kelvinToCelsius(weatherData[selectedDay]?.main.temp)}
      </p>
      <p className="tmpUnity">°C</p>
    </div>
  );
};

export default TempCurrent;

import React, { useContext } from "react";
import "../../styles/ListOfHighlights.scss";
import { CoordsContext } from "../../context/CoordsContext.js";
import { metersToMiles, msToMph } from "../../utils/weatherConversion.js";
import HighlightBox from "./HighlightBox";

const ListOfHighlights = () => {
  const { weatherData, selectedDay } = useContext(CoordsContext);

  return (
    <div className="listOfHighlights">
      <HighlightBox
        type="wind"
        value={msToMph(weatherData[selectedDay]?.wind.speed)}
        unit="mph"
        windP={weatherData[selectedDay]?.wind.deg}
        title="Wind status"
      />
      <HighlightBox
        type="humidity"
        value={weatherData[selectedDay]?.main.humidity}
        unit="%"
        title="Humidity"
      />
      <HighlightBox
        type="visibility"
        value={metersToMiles(weatherData[selectedDay]?.visibility)}
        unit="miles"
        title="Visibility"
      />
      <HighlightBox
        type="pressure"
        value={weatherData[selectedDay]?.main.pressure}
        unit="mb"
        title="Air Pressure"
      />
    </div>
  );
};

export default ListOfHighlights;

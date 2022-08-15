import React, { useContext } from "react";
import ListOfHighlights from "./ListOfHighlights";
import "../../styles/highlightsWeather.scss";
import { ThemeContext } from "../../context/ThemeContext";
import { CoordsContext } from "../../context/CoordsContext";
import { getStringDate } from "../../utils/weatherConversion";

function HighlightsWeather() {
  const { isDark } = useContext(ThemeContext);
  const { selectedDay } = useContext(CoordsContext);

  return (
    <div
      className={`mainContainer ${isDark ? "dark" : "light"}-bg-app ${
        isDark ? "dark" : "light"
      }-pri-text`}
    >
      <h2>
        {getStringDate(selectedDay) && getStringDate(selectedDay) + "'s"}{" "}
        Highlights
      </h2>
      <ListOfHighlights />
    </div>
  );
}

export default HighlightsWeather;

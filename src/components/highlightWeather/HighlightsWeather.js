import React, { useContext } from "react";
import ListOfHighlights from "./ListOfHighlights";
import "../../styles/highlightsWeather.scss";
import { ThemeContext } from "../../context/ThemeContext";

function HighlightsWeather() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`mainContainer ${isDark ? "dark" : "light"}-bg-app ${
        isDark ? "dark" : "light"
      }-pri-text`}
    >
      <h2>Today's Highlights</h2>
      <ListOfHighlights />
    </div>
  );
}

export default HighlightsWeather;

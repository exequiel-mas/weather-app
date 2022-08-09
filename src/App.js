import React from "react";
import "./App.scss";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import DaysWeather from "./components/daysWeather/daysWeather";
import HighlightWeather from "./components/highlightWeather/HighlightsWeather";

function App() {
  return (
    <div className="App">
      <CurrentWeather />
      <DaysWeather />
      <HighlightWeather />
    </div>
  );
}

export default App;

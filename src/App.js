import React from "react";
import "./App.scss";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import DaysWeather from "./components/daysWeather/daysWeather";
import HighlightWeather from "./components/highlightWeather/HighlightsWeather";
import SearchMenu from "./components/searchMenu/SearchMenu";

import { useContext } from "react";
import { CoordsContext } from "./context/CoordsContext";

function App() {
  // const [coords, setCoords] = useState({ lat: 0, lon: 0 });

  // const { weatherData, errorWeatherData, loadingWeatherData } = useWeatherData(
  //   coords.lat,
  //   coords.lon
  // );
  // function handleCoords(lat, lon) {
  //   setCoords({ lat, lon });
  // }

  return (
    <div className="App">
      <CurrentWeather />
      <DaysWeather />
      <HighlightWeather />
    </div>
  );
}

export default App;

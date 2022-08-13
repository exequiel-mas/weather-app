import "../../styles/daysWeather.scss";
import DaysWeatherBox from "./daysWeatherBox";
import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext";
import { ThemeContext } from "../../context/ThemeContext.js";

const DaysWeather = () => {

  const { weatherData } = useContext(CoordsContext);
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`daysWeather ${isDark ? "dark" : "light"}-bg-app`}>
      <h2>Week Weather</h2>
      <div className="DaysContainer">
        {weatherData.map((data, index, bigdata) => (
          <DaysWeatherBox key={index} data={data} index={index} bigdata={bigdata}  />
        ))}
      </div>
    </div>
  );
};

export default DaysWeather;

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
      <h2 className={`${isDark ? "dark" : "light"}-pri-text`}>
        Weather Forecast
      </h2>
      <div className="DaysContainer">
        {weatherData.map((data, index, bigdata) => (
          <DaysWeatherBox key={index} data={data} index={index} bigdata={bigdata} min={bigdata[index].main.temp_min} max={bigdata[index].main.temp_max}/>
        ))}
      </div>
    </div>
  );
};

export default DaysWeather;

import { useEffect, useState, useContext } from "react";
import "../../styles/daysWeather.scss";
import { getDays } from "./APIsimlulator.js";
import DaysWeatherBox from "./daysWeatherBox";
import { ThemeContext } from "../../context/ThemeContext.js";

const DaysWeather = () => {
  const [days, setDays] = useState([]);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    getDays().then((response) => {
      setDays(response);
    });
  }, []);

  return (
    <div className={`daysWeather ${isDark ? "dark" : "light"}-bg-app`}>
      <div className="DaysContainer">
        {days.map((day, index) => (
          <DaysWeatherBox key={day.id} indexSelected={index} {...day} />
        ))}
      </div>
    </div>
  );
};

export default DaysWeather;

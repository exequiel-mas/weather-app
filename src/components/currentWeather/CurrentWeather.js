import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext";
import NavBar from "./navbar";
import LogoCurrent from "./LogoCurrent";
import TempCurrent from "./TempCurrent";
import FooterCurrent from "./FooterCurrent";
import "../../styles/currentWeather.scss";
import { ThemeContext } from "../../context/ThemeContext";

function CurrentWeather() {
  const { weatherData, handleSelectedDay, selectedDay } = useContext(CoordsContext);
  const { isDark } = useContext(ThemeContext);
  const weather = weatherData[selectedDay];
  // console.log(weather);
  weatherData.forEach((el) => console.log(convertDate(el.dt_txt)));

  return (
    <div
      className={`currentWeather-${
        isDark ? "dark dark" : "light light"
      }-bg-box`}
      onClick={() => handleSelectedDay(0)}
    >
      <div className="bodyCurrent">
        <LogoCurrent drawDescription={`${weather?.weather[0].description}`} />
        <TempCurrent />
        <FooterCurrent />
      </div>
    </div>
  );
}

export default CurrentWeather;

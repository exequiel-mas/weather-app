import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext";
import NavBar from "./navbar";
import LogoCurrent from "./LogoCurrent";
import TempCurrent from "./TempCurrent";
import FooterCurrent from "./FooterCurrent";
import "../../styles/currentWeather.scss";
import convertDate from "../../utils/dateConversion";
import SearchMenu from "../searchMenu/SearchMenu";
import { ThemeContext } from "../../context/ThemeContext";

function CurrentWeather() {
  const { weatherData, handleSelectedDay, selectedDay } = useContext(CoordsContext);
  const { isDark } = useContext(ThemeContext);

  const weather = weatherData[selectedDay];
  // console.log(weather.weather[0].description);
  // weatherData.forEach((el) => console.log(convertDate(el.dt_txt)));

  return (
    <div
      className={`currentWeather ${isDark ? "dark" : "light"}-bg-menu`}
      onClick={() => handleSelectedDay(0)}
    >
      <NavBar />
      <div className="bodyCurrent">
        <LogoCurrent drawDescription={`${weather?.weather[0].description}`} />
        <TempCurrent />
        <FooterCurrent info={weather} day={selectedDay}/>
        <SearchMenu />
      </div>
    </div>
  );
}

export default CurrentWeather;

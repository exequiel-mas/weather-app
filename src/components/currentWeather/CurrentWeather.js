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
  const { weatherData, handleSelectedDay } = useContext(CoordsContext);
  const { isDark } = useContext(ThemeContext);
  // const weather = weatherData.weather.at(0);
  // console.log(weather);
  weatherData.forEach((el) => console.log(convertDate(el.dt_txt)));

  return (
    <div
      className={`currentWeather ${isDark ? "dark" : "light"}-bg-menu`}
      onClick={() => handleSelectedDay(0)}
    >
      <NavBar />
      <div className="bodyCurrent">
        <LogoCurrent drawDescription={" "} />
        <TempCurrent />
        <FooterCurrent />
        <SearchMenu />
      </div>
    </div>
  );
}

export default CurrentWeather;

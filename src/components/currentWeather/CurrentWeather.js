import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext";
import NavBar from "./navbar";
import LogoCurrent from "./LogoCurrent";
import TempCurrent from "./TempCurrent";
import FooterCurrent from "./FooterCurrent";
import "../../styles/currentWeather.scss";
import convertDate from "../../utils/dateConversion";

function CurrentWeather() {
  const { weatherData, handleSelectedDay } = useContext(CoordsContext);
  // const weather = weatherData.weather.at(0);
  // console.log(weather);
  weatherData.forEach((el) => console.log(convertDate(el.dt_txt)));

  return (
    <div className={"currentWeather "} onClick={() => handleSelectedDay(0)}>
      <NavBar />
      <div className="bodyCurrent">
        <LogoCurrent drawDescription={" "} />
        <TempCurrent />
        <FooterCurrent />
      </div>
    </div>
  );
}

export default CurrentWeather;

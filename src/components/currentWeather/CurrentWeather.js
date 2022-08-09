import { useContext, useState } from "react";
import { CoordsContext } from "../../context/CoordsContext";
import NavBar from "./navbar";
import LogoCurrent from "./LogoCurrent";
import TempCurrent from "./TempCurrent";
import FooterCurrent from "./FooterCurrent";
import "../../styles/currentWeather.scss";
import convertDate from "../../utils/dateConversion";
import SearchMenu from "../searchMenu/SearchMenu";

function CurrentWeather() {
  const { weatherData, handleSelectedDay } = useContext(CoordsContext);
  // const weather = weatherData.weather.at(0);
  // console.log(weather);
  weatherData.forEach((el) => console.log(convertDate(el.dt_txt)));

  const [menuOpened, setMenuOpened] = useState(false);

  function handleMenuOpened() {
    setMenuOpened((prev) => !prev);
  }

  return (
    <div className={"currentWeather "} onClick={() => handleSelectedDay(0)}>
      <NavBar openMenu={handleMenuOpened} />
      <div className="bodyCurrent">
        <LogoCurrent drawDescription={" "} />
        <TempCurrent />
        <FooterCurrent />
        <SearchMenu menuOpened={menuOpened} openMenu={handleMenuOpened} />
      </div>
    </div>
  );
}

export default CurrentWeather;

import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext";
import NavBar from './navbar';
import LogoCurrent from './LogoCurrent';
import TempCurrent from './TempCurrent';
import FooterCurrent from './FooterCurrent';
import '../../styles/currentWeather.scss';

function CurrentWeather() {
  
  const {weatherData} = useContext(CoordsContext);
  // const weather = weatherData.weather.at(0);
  // console.log(weather);


  return (
    <div className="currentWeather">
      <NavBar />
      <div className="bodyCurrent">
        <LogoCurrent drawDescription={" "}/>
        <TempCurrent />
        <FooterCurrent />
      </div>
    </div>
  );
}

export default CurrentWeather;

import "../../styles/daysWeatherBox.scss";
import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext.js";
import { ThemeContext } from "../../context/ThemeContext.js";

const DaysWeatherBox = (props) => {
  const { handleSelectedDay } = useContext(CoordsContext);
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={`DaysWeatherBox ${isDark ? "dark" : "light"}-bg-box`}
      onClick={() => handleSelectedDay(props.indexSelected)}
    >
      <div className={`DaysWeatherBoxDiv`}>
        <div className="sliceBox">
          <h2 className={`${isDark ? "dark" : "light"}-pri-text`}>
            {props.day}
          </h2>
          <div className="ImgClima">
            <img src={props.clima} alt="imagen del clima" />
          </div>
        </div>
        <div className={`TempsDay ${isDark ? "dark" : "light"}-pri-text`}>
          <p>{props.tmpmax}°c</p>
          <p className={`MinTemp ${isDark ? "dark" : "light"}-sec-text`}>
            {props.tmpmin}°c
          </p>
        </div>
      </div>
    </div>
  );
};

export default DaysWeatherBox;

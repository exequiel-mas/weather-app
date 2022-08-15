import "../../styles/daysWeatherBox.scss";
import convertDate from "../../utils/dateConversion";
import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext.js";
import { ThemeContext } from "../../context/ThemeContext.js";
import { kelvinToCelsius, kelvintToFarenheit, getDrawDescription } from "../../utils/weatherConversion";
import { BeatLoader } from "react-spinners";
import { UIContext } from "../../context/UIContext";

const DaysWeatherBox = ({data, index, min, max}) => {
  const { handleSelectedDay, loadingWeatherData} = useContext(CoordsContext);
  const { isDark } = useContext(ThemeContext);
  const { farenheit } = useContext(UIContext);

  return (
    <div
      className={`DaysWeatherBox ${isDark ? "dark" : "light"}-bg-box`}
      onClick={() => handleSelectedDay(index)}
    >
      {!loadingWeatherData ? (
              <div className={`DaysWeatherBoxDiv`}>
              <div className="sliceBox">
                <h2 className={`${isDark ? "dark" : "light"}-pri-text`}>
                  { index === 0
                    ? "Today"
                    : index === 1
                    ? "Tomorrow"
                    : convertDate(data.dt_txt)
                  }
                </h2>
                <div className="ImgClima">
                  <img src={require(`../../images/${getDrawDescription(data.weather[0].description)}.png`)} alt="imagen del clima" />
                </div>
              </div>
              <div className={`TempsDay ${isDark ? "dark" : "light"}-pri-text`}>
                <p>
                {farenheit
                  ? `min ${kelvintToFarenheit(min)} °F`
                  : `min ${kelvinToCelsius(min)} °C`
                }
                </p>
                <p className={`MinTemp ${isDark ? "dark" : "light"}-sec-text`}>
                {farenheit
                  ? `max ${kelvintToFarenheit(max)} °F`
                  : `max ${kelvinToCelsius(max)} °C`
                }
                </p>
              </div>
            </div>
      ) : (
        <div className="loaderContainer">
          <BeatLoader color="white" />
        </div>
      )}
    </div>
  );
};

export default DaysWeatherBox;

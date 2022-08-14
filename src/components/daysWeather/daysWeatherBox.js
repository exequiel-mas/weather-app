import "../../styles/daysWeatherBox.scss";
import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext.js";
import { ThemeContext } from "../../context/ThemeContext.js";
import { kelvinToCelsius } from "../../utils/weatherConversion";
import convertDate from "../../utils/dateConversion";
import { BeatLoader } from "react-spinners";

const DaysWeatherBox = ({data, index, bigdata}) => {
  const { handleSelectedDay, loadingWeatherData } = useContext(CoordsContext);
  const { isDark } = useContext(ThemeContext);

  const getDrawDescription = description => {
    switch (description) {
      case 'broken clouds':
        return 'HeavyCloud';
      case 'scattered clouds':
        return 'LightCloud';
      case 'overcast clouds':
        return 'HeavyCloud';
      case 'light rain':
        return 'LightRain';
      case 'few clouds':
        return 'LightCloud';
      case 'moderate rain':
        return 'HeavyRain';
      case 'clear sky':
        return 'Clear';
      case 'heavy intensity rain':
        return 'HeavyRain';
      case 'light snow':
        return 'Snow';
      default:
        return 'LightCloud';
    }
  };

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
                    ? <p>Today</p>
                    : index === 1
                    ? <p>Tomorrow</p>
                    : convertDate(data.dt_txt)
                  }
                </h2>
                <div className="ImgClima">
                  <img src={require(`../../images/${getDrawDescription(data.weather[0].description)}.png`)} alt="imagen del clima" />
                </div>
              </div>
              <div className={`TempsDay ${isDark ? "dark" : "light"}-pri-text`}>
                <p>{kelvinToCelsius(data.main.temp_min)}°c</p>
                <p className={`MinTemp ${isDark ? "dark" : "light"}-sec-text`}>
                  {kelvinToCelsius(data.main.temp_max)}°c
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

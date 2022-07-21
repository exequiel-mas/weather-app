import '../../styles/daysWeatherBox.scss';
import { useContext } from 'react';
import { CoordsContext } from '../../context/CoordsContext.js';

const DaysWeatherBox = props => {
  const { handleSelectedDay } = useContext(CoordsContext);
  return (
    <div
      className="DaysWeatherBox"
      onClick={() => handleSelectedDay(props.indexSelected)}
    >
      <div className="DaysWeatherBoxDiv">
        <h2>{props.day}</h2>
        <div className="ImgClima">
          <img src={props.clima} alt="imagen del clima" />
        </div>
        <div className="TempsDay">
          <p>{props.tmpmax}°c</p>
          <p className="MinTemp">{props.tmpmin}°c</p>
        </div>
      </div>
    </div>
  );
};

export default DaysWeatherBox;

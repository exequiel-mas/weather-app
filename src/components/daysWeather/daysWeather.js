import { useEffect, useState } from 'react';
import '../../styles/daysWeather.scss';
import { getDays } from './APIsimlulator.js';
import DaysWeatherBox from './daysWeatherBox';

const DaysWeather = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    getDays().then(response => {
      setDays(response);
    });
  }, []);

  return (
    <div className="daysWeather">
      <div className="DaysContainer">
        {days.map((day, index) => (
          <DaysWeatherBox key={day.id} indexSelected={index} {...day} />
        ))}
      </div>
    </div>
  );
};

export default DaysWeather;

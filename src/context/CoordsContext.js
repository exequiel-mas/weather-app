import { createContext, useState } from 'react';
import useWeatherData from '../hooks/useWeatherData';
import useCityCoords from '../hooks/useCityCoords';
import { useGeoLocation } from 'use-geo-location';

const CoordsContext = createContext();

const CoordsContextProvider = ({ children }) => {
  const { latitude, longitude } = useGeoLocation();
  const [coords, setCoords] = useState({ lat: latitude, lon: longitude });
  const { weatherData, errorWeatherData, loadingWeatherData } = useWeatherData(
    coords.lat,
    coords.lon
  );

  function handleCoords(lat, lon) {
    setCoords({ lat, lon });
  }
  /*--------------------- */

  const [inputData, setInputData] = useState('');
  const [submitData, setSubmitData] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);

  function handleSelectedDay(index) {
    setSelectedDay(index);
  }

  function handleInputData(e) {
    setInputData(e.target.value);
  }
  function handleSubmitData() {
    setSubmitData(inputData);
  }

  const { cityCoords, loadingCoords, errorCoords } = useCityCoords(submitData);

  const variables = {
    weatherData,
    errorWeatherData,
    loadingWeatherData,
    handleCoords,
    inputData,
    submitData,
    cityCoords,
    loadingCoords,
    errorCoords,
    handleInputData,
    handleSubmitData,
    selectedDay,
    handleSelectedDay,
  };

  return (
    <CoordsContext.Provider value={variables}>
      {children}
    </CoordsContext.Provider>
  );
};

export { CoordsContext, CoordsContextProvider };

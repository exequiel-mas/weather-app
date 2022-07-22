import React, { createContext, useState } from 'react';
import useWeatherData from '../hooks/useWeatherData';
import useCityCoords from '../hooks/useCityCoords';
import { useGeoLocation } from 'use-geo-location';
import useReverseGeocoding from '../hooks/useReverseGeocoding';

const CoordsContext = createContext();

const CoordsContextProvider = ({ children }) => {
  const { latitude, longitude } = useGeoLocation();
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const { weatherData, errorWeatherData, loadingWeatherData } = useWeatherData(
    coords.lat,
    coords.lon
  );

  React.useEffect(() => handleCoords(latitude, longitude), []);

  const { reversedData } = useReverseGeocoding(latitude, longitude);

  function handleCoords(lat, lon) {
    setCoords({ lat: lat, lon: lon });
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
    reversedData,
  };

  return (
    <CoordsContext.Provider value={variables}>
      {children}
    </CoordsContext.Provider>
  );
};

export { CoordsContext, CoordsContextProvider };

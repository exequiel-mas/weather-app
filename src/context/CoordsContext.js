import React, { createContext, useState, useEffect } from "react";
import useWeatherData from "../hooks/useWeatherData";
import useCityCoords from "../hooks/useCityCoords";
import { useGeoLocation } from "use-geo-location";
import useReverseGeocoding from "../hooks/useReverseGeocoding";

const CoordsContext = createContext();

const CoordsContextProvider = ({ children }) => {
  const [geoActive, setGeoActive] = useState(true);
  const { latitude, longitude } = useGeoLocation();
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });

  function handleGeoActive() {
    setGeoActive((prev) => !prev);
  }

  useEffect(
    () =>
      geoActive
        ? setCoords({ lat: latitude, lon: longitude })
        : setCoords({ lat: coords.lat, lon: coords.lon }),
    [latitude, longitude, geoActive, coords.lat, coords.lon]
  );

  const {
    weatherData,
    errorWeatherData,
    loadingWeatherData,
    selectedDay,
    handleSelectedDay,
  } = useWeatherData(coords.lat, coords.lon);

  const { reversedData } = useReverseGeocoding(coords.lat, coords.lon);

  function handleCoords(lat, lon) {
    handleGeoActive();
    setCoords({ lat: lat, lon: lon });
  }
  /*--------------------- */

  const [inputData, setInputData] = useState("");
  const [submitData, setSubmitData] = useState(null);

  function handleInputData(e) {
    setInputData(e.target.value);
  }
  function handleSubmitData(e) {
    e.preventDefault();
    setSubmitData(inputData);
  }

  function resetSearch() {
    setInputData("");
    cityCoords = [];
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
    handleGeoActive,
    resetSearch,
  };

  return (
    <CoordsContext.Provider value={variables}>
      {children}
    </CoordsContext.Provider>
  );
};

export { CoordsContext, CoordsContextProvider };

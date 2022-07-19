import './App.scss';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import DaysWeather from './components/daysWeather/daysWeather';
import HighlightWeather from './components/highlightWeather/HighlightsWeather';
import SearchMenu from './components/searchMenu/SearchMenu';
import { useGeoLocation } from 'use-geo-location'; // es un hook que viene con npm, te devuelve la latitud y la longitud
import useWeatherData from './hooks/useWeatherData';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  // const { latitude, longitude } = useGeoLocation(); // De esta manera obtenemos la lat y lon de nuestra ubicacion

  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const { weatherData, errorWeatherData, loadingWeatherData } = useWeatherData(
    coords.lat,
    coords.lon
  );
  function handleCoords(lat, lon) {
    setCoords({ lat, lon });
  }

  return (
    <div className="App">
      {weatherData &&
        weatherData.map(el => <h1 key={nanoid()}>{el.visibility}</h1>)}
      <CurrentWeather />
      <DaysWeather />
      <HighlightWeather />
      <SearchMenu handleCoords={handleCoords} />
    </div>
  );
}

export default App;

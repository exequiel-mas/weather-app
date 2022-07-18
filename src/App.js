import './App.scss';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import DaysWeather from './components/daysWeather/daysWeather';
import HighlightWeather from './components/highlightWeather/HighlightsWeather';
import SearchMenu from './components/searchMenu/SearchMenu';
import { useGeoLocation } from 'use-geo-location'; // es un hook que viene con npm, te devuelve la latitud y la longitud
import useCityCoords from './hooks/useCityCoords';
import useWeatherData from './hooks/useWeatherData';

function App() {
  // const { latitude, longitude } = useGeoLocation(); // De esta manera obtenemos la lat y lon de nuestra ubicacion
  const { cityCoords, loadingCoords, errorCoords } = useCityCoords('London');
  const { weatherData, errorWeatherData, loadingWeatherData } = useWeatherData(
    cityCoords.lat,
    cityCoords.lon
  );
  return (
    <div className="App">
      <CurrentWeather />
      <DaysWeather />
      <HighlightWeather />
      <SearchMenu />
    </div>
  );
}

export default App;

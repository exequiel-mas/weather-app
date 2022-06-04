import './App.scss';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import DaysWeather from './components/daysWeather/daysWeather';
import HighlightWeather from './components/highlightWeather/HighlightsWeather';
import SearchMenu from './components/searchMenu/SearchMenu';

function App() {
  return (
    <div className="App">
      <CurrentWeather />
      <DaysWeather/>
      <HighlightWeather />
      <SearchMenu />
    </div>
  );
}

export default App;

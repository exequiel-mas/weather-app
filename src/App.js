import CurrentWeather from './components/currentWeather/CurrentWeather';
import HighlightWeather from './components/highlightWeather/HighlightsWeather';
import './App.scss';
import SearchMenu from './components/searchMenu/SearchMenu';

function App() {
  return (
    <div className="App">
      <CurrentWeather />
      <HighlightWeather />
      <SearchMenu />
    </div>
  );
}

export default App;

import CurrentWeather from './components/currentWeather/CurrentWeather';
import HighlightWeather from './components/highlightWeather/HighlightsWeather';
import './App.scss';

function App() {
  return (
    <div className="App">
      <CurrentWeather />
      <HighlightWeather />
    </div>
  );
}

export default App;

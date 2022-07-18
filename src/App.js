import { useEffect, useState } from 'react';
import './App.scss';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import DaysWeather from './components/daysWeather/daysWeather';
import HighlightWeather from './components/highlightWeather/HighlightsWeather';
import SearchMenu from './components/searchMenu/SearchMenu';

function App() {
  const apiKey = "70fe5562d0c99e46b6419e47efc70ed5";
  const [data, setData] = useState([]);
  const [ weatherDays, setWeatherDays] = useState({});
  const [coordenadas, setCoordenadas] = useState({lat: 0, lon: 0});

  useEffect(()=> {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // setData(date);
      // handleCoordenadas();
      fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}`)
        .then(response => response.json())
        .then(weatherDate => {
           setWeatherDays(weatherDate.list.slice(0, 5));
           console.log(weatherDays);
          })
        });
  },[]);

  
  // const handleCoordenadas = () =>{
  //   setCoordenadas({lat: data[0].lat, lon: data[0].lon}); //<==> el numero del array será variable.
  //   console.log(coordenadas);
  // }


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

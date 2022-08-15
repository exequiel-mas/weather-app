import { useEffect, useState } from "react";
import axios from "axios";

export default function useWeatherData(lat, lon) {
  const apiKey = "c14075cfcb8e6a63e07085ff4b3fb23c";
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  const [weatherData, setWeatherData] = useState([]);
  const [errorWeatherData, setError] = useState(null);
  const [loadingWeatherData, setLoading] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);

  function handleSelectedDay(index) {
    setSelectedDay(index);
  }

  useEffect(() => {
    if (!lat && !lon) return;
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setWeatherData(
          response.data.list.filter((timestamp, index) => index % 7 === 0)
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [lat, lon, url]);

  return {
    weatherData,
    errorWeatherData,
    loadingWeatherData,
    selectedDay,
    handleSelectedDay,
  };
}

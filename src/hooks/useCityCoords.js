import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useCityCoords(place) {
  const apiKey = 'c14075cfcb8e6a63e07085ff4b3fb23c';
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${apiKey}`;

  const [cityCoords, setCityCoords] = useState([]);
  const [errorCoords, setError] = useState(null);
  const [loadingCoords, setLoading] = useState(false);

  useEffect(() => {
    if (place === null) return;
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setCityCoords(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [place, url]);

  return { cityCoords, errorCoords, loadingCoords };
}

// REFERENCE: https://dev.to/shaedrizwan/building-custom-hooks-in-react-to-fetch-data-4ig6

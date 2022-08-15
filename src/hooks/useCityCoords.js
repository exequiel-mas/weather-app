import { useEffect, useState } from "react";
import axios from "axios";

export default function useCityCoords(place) {
  const apiKey = "c14075cfcb8e6a63e07085ff4b3fb23c";
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${apiKey}`;

  const [cityCoords, setCityCoords] = useState([]);
  const [errorCoords, setError] = useState(null);
  const [loadingCoords, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (place === null) return;
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setCityCoords(response.data);
        if (response.data.length === 0) {
          setHasError(true);
          throw new Error("Try something different");
        } else {
          setHasError(false);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, place]);

  return { cityCoords, errorCoords, loadingCoords, hasError };
}

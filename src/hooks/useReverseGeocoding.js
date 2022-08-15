import { useEffect, useState } from "react";
import axios from "axios";

export default function useReverseGeocoding(lat, lon) {
  const apiKey = "0b09bec8aca849e99239a8f75e1be438";
  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`;

  const [reversedData, setReversedData] = useState({});
  const [errorReversedData, setError] = useState(null);
  const [loadingReversedData, setLoading] = useState(false);

  useEffect(() => {
    if (!lat && !lon) return;
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setReversedData(response.data.features[0].properties);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, lat, lon]);

  return { reversedData, errorReversedData, loadingReversedData };
}

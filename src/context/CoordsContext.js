import { createContext, useState } from "react";
import useWeatherData from "../hooks/useWeatherData";
import useCityCoords from "../hooks/useCityCoords";
const CoordsContext = createContext();


const CoordsContextProvider = ({children}) =>{

    const [coords, setCoords] = useState({ lat: 0, lon: 0 });

    const { weatherData, errorWeatherData, loadingWeatherData } = useWeatherData(
      coords.lat,
      coords.lon
    );
  
    function handleCoords(lat, lon) {
      setCoords({ lat, lon });
    }
    /*--------------------- */

    const [inputData, setInputData] = useState('');
    const [submitData, setSubmitData] = useState(null);
  
    function handleInputData(e) {
      setInputData(e.target.value);
    }
    function handleSubmitData() {
      setSubmitData(inputData);
    }
    const { cityCoords, loadingCoords, errorCoords } = useCityCoords(submitData);

    const variables = {
        weatherData, 
        errorWeatherData, 
        loadingWeatherData, 
        handleCoords, 
        inputData, 
        submitData, 
        cityCoords, 
        loadingCoords, 
        errorCoords, 
        handleInputData, 
        handleSubmitData
    }

    return(
        <CoordsContext.Provider value={variables}>
            {children}
        </CoordsContext.Provider>
    )
}

export {CoordsContext, CoordsContextProvider};



import HighlightBox from './HighlightBox';
import '../../styles/ListOfHighlights.scss';
import React, { Suspense } from 'react';
import { useContext } from 'react';
import { CoordsContext } from '../../context/CoordsContext.js';
import { metersToMiles, msToMph } from '../../utils/weatherConversion.js';
import { BeatLoader } from 'react-spinners';

const ListOfHighlights = () => {
  const { weatherData, selectedDay, loadingWeatherData } =
    useContext(CoordsContext);
  const selectedData = weatherData[selectedDay]; // hacer esto no seria una buena practica, quizas estaria bueno que hasta que este disponible se renderize un componente o sino, arreglarlo para que al entrar a la app ya se te cargue la ubicacion

  return (
    selectedData && (
      <div className="listOfHighlights">
        <Suspense fallback={<BeatLoader />}>
          <HighlightBox
            type="wind"
            value={msToMph(selectedData.wind.speed)}
            unit="mph"
            windP={selectedData.wind.deg} //Aca le paso la posicion del viento
            title="Wind status"
          />
        </Suspense>
        <Suspense fallback={<BeatLoader />}>
          <HighlightBox
            type="humidity"
            value={selectedData.main.humidity}
            unit="%"
            title="Humidity"
          />
        </Suspense>
        <Suspense fallback={<BeatLoader />}>
          <HighlightBox
            type="visibility"
            value={metersToMiles(selectedData.visibility)}
            unit="miles"
            title="Visibility"
          />
        </Suspense>
        <Suspense fallback={<BeatLoader />}>
          <HighlightBox
            type="pressure"
            value={selectedData.main.pressure}
            unit="mb"
            title="Air Pressure"
          />
        </Suspense>
      </div>
    )
  );
};

export default ListOfHighlights;

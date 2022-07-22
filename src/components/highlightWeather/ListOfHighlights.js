import '../../styles/ListOfHighlights.scss';
import React, { Suspense } from 'react';
import { useContext } from 'react';
import { CoordsContext } from '../../context/CoordsContext.js';
import { metersToMiles, msToMph } from '../../utils/weatherConversion.js';
import { BeatLoader } from 'react-spinners';

const ListOfHighlights = () => {
  const { weatherData, selectedDay } = useContext(CoordsContext);
  // hacer esto no seria una buena practica, quizas estaria bueno que hasta que este disponible se renderize un componente o sino, arreglarlo para que al entrar a la app ya se te cargue la ubicacion

  const HighlightBox = React.lazy(() => import('./HighlightBox'));

  return (
    <div className="listOfHighlights">
      <Suspense fallback={<BeatLoader />}>
        <HighlightBox
          type="wind"
          value={/*msToMph(selectedData.wind.speed)*/ 10}
          unit="mph"
          windP={/*selectedData.wind.deg*/ 10} //Aca le paso la posicion del viento
          title="Wind status"
        />
        <HighlightBox
          type="humidity"
          value={/*weatherData[selectedDay].main.humidity*/ 10}
          unit="%"
          title="Humidity"
        />
        <HighlightBox
          type="visibility"
          value={metersToMiles(/*selectedData.visibility*/ 10000)}
          unit="miles"
          title="Visibility"
        />
        <HighlightBox
          type="pressure"
          value={/*selectedData.main.pressure*/ 10}
          unit="mb"
          title="Air Pressure"
        />
      </Suspense>
    </div>
  );
};

export default ListOfHighlights;

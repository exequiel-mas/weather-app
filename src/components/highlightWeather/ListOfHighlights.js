import HighlightBox from './HighlightBox';
import '../../styles/ListOfHighlights.scss';
import React from 'react';

const ListOfHighlights = () => {
  return (
    <div className="listOfHighlights">
      <HighlightBox
        type="wind"
        value="7"
        unit="mph"
        title="Wind status"
        windP={'southEast'} //Aca le paso la posicion del viento
      />
      <HighlightBox type="humidity" value="84" unit="%" title="Humidity" />
      <HighlightBox
        type="visibility"
        value="6,4"
        unit="miles"
        title="Visibility"
      />
      <HighlightBox
        type="pressure"
        value="998"
        unit="mb"
        title="Air Pressure"
      />
    </div>
  );
};

export default ListOfHighlights;

import ListOfHighlights from './ListOfHighlights';
import React from 'react';
import '../../styles/HighlightsWeather.scss';

function HighlightsWeather() {
  return (
    <div className="mainContainer">
      <h2>Today's Highlights</h2>
      <ListOfHighlights />
    </div>
  );
}

export default HighlightsWeather;

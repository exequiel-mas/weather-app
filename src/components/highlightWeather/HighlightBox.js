import React from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import styled from 'styled-components';
import '../../styles/HighlightsBox.scss';
import useWindPos from '../../hooks/useWindPos';

const HighlightBox = ({ type, title, value, unit, windP }) => {
  const { windDirection, angleRotation } = useWindPos(windP);
  return (
    <div className="boxContainer">
      <h4>{title}</h4>
      <div className="valueContainer">
        <p className="value">{value}</p>
        <p className="unit">{unit}</p>
      </div>
      {type === 'wind' && (
        <WindDirection angle={angleRotation} windP={windDirection} />
      )}
      {type === 'humidity' && <HumidityMeter value={value} />}
    </div>
  );
};

const WindDirection = ({ windP, angle }) => {
  return (
    <div className="windDirection">
      <LocationArrowContainer angle={angle}>
        <TiLocationArrow />
      </LocationArrowContainer>
      <p>{windP}</p>
    </div>
  );
};

const MeasureHumidity = styled.div`
  background-color: #ffec65;
  border-radius: 4px;
  width: ${props => props.value + '%'};
`;

const HumidityMeter = ({ value }) => (
  <div className="humidityMeter">
    <div className="percentajeValue">
      <p>0</p>
      <p>50</p>
      <p>100</p>
    </div>
    <div className="meterBack">
      <MeasureHumidity value={value} />
    </div>
    <div className="percentaje">
      <p>%</p>
    </div>
  </div>
);

// NO PUDE UTILIZAR UNA VARIABLE SASS DENTRO DE UN STYLED COMPONENT
const LocationArrowContainer = styled.div`
  background: #6e707a;
  border-radius: 50%;
  color: #e7e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  padding: 2px;
  transform: rotate(${props => props.angle});
`;

export default React.memo(HighlightBox);

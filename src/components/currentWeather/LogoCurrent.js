import '../../styles/LogoCurrent.scss';
import React from 'react';
import { getDrawDescription } from '../../utils/weatherConversion';

const LogoCurrent = ({ drawDescription }) => {

  return (
    <div className="logoContainerCurrent">
      <img
        className="imgLogoCurrent"
        src={require(`../../images/${getDrawDescription(drawDescription)}.png`)}
        alt="logo clima"
      />
    </div>
  );
};

export default LogoCurrent;

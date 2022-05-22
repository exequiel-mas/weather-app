import React from 'react';
import '../../styles/LogoCurrent.scss';

const LogoCurrent = () => {
  return (
    <div className="logoContainerCurrent">
      <img
        className="imgLogoCurrent"
        src={require('../../images/LightCloud.png')}
      />
    </div>
  );
};

export default LogoCurrent;

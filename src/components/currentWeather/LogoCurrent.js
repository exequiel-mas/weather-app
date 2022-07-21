import React from 'react';
import '../../styles/LogoCurrent.scss';

const LogoCurrent = ({drawDescription}) => {

  const getDrawDescription = (description) =>{

    switch (description){
      case  "broken clouds": 
        return "HeavyCloud"
      case  "scattered clouds":
        return "LightCloud"
      case  "overcast clouds":
        return "HeavyCloud"
      case  "light rain":
        return "LightRain"
      case  "few clouds":
        return "LightCloud"
      case  "moderate rain":
        return "HeavyRain"
      case  "clear sky":
        return "Clear"
      case  "light snow":
        return "Snow"
      default:
        return "Snow";       
    }
  }

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

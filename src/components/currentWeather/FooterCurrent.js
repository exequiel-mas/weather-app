import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import '../../styles/FooterCurrent.scss';
const FooterCurrent = () => {
  return (
    <>
      <div className="currentDataText">
        <p>Today</p>
        <p>·</p>
        <p>Fri. 5 Jun</p>
      </div>
      <div className="locationData">
        <IoLocationSharp />
        <p>Helsinki</p>
      </div>
    </>
  );
};

export default FooterCurrent;

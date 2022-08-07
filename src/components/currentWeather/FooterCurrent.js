import React from "react";
import { useContext } from "react";
import { CoordsContext } from "../../context/CoordsContext";
import { IoLocationSharp } from "react-icons/io5";
import "../../styles/FooterCurrent.scss";

const FooterCurrent = () => {
  const { reversedData } = useContext(CoordsContext);
  console.log(reversedData);
  return (
    <>
      <div className="currentDataText">
        <p>Today</p>
        <p>·</p>
        <p>Fri, 5 Jun</p>
      </div>
      <div className="locationData">
        <IoLocationSharp />
        {reversedData && <p>{reversedData.county}</p>}
      </div>
    </>
  );
};

export default FooterCurrent;

import React, { useContext } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { ThemeContext } from "../../context/ThemeContext.js";

const LocationOption = ({ city, country, handleCoords, lat, lon }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <OptionContainer
      className={`${isDark ? "dark" : "light"}-bg-menu`}
      onClick={(event) => handleCoords(lat, lon)}
    >
      {city}, {country}
      <IoIosArrowForward />
    </OptionContainer>
  );
};

const OptionContainer = styled.button`
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px white;
  margin: 10px 0px;
  padding: 12px;
  cursor: pointer;
`;

export default LocationOption;

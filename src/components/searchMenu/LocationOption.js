import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

const LocationOption = ({ city, country, handleCoords,lat,lon }) => (
  <OptionContainer onClick={event => handleCoords(lat,lon)}>
    {city}, {country}
    <IoIosArrowForward />
  </OptionContainer>
);

const OptionContainer = styled.button`
  font-size: 1.2rem;
  font-weight: 500;
  background-color: #1e213af2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border: solid 1px white;
  margin: 10px 0px;
  padding: 12px;
  cursor: pointer;
`;

export default LocationOption;

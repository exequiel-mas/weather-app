import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

const LocationOption = ({ place }) => (
  <OptionContainer>
    <h3>{place}</h3>
    <IoIosArrowForward />
  </OptionContainer>
);

const OptionContainer = styled.div`
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

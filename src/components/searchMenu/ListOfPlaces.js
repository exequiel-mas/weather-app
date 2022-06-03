import React from 'react';
import styled from 'styled-components';
import LocationOption from './LocationOption';

const arrayPlaces = [
  { place: 'London' },
  { place: 'Barcelona' },
  { place: 'Long Beach' },
];

const ListOfPlaces = () => (
  <ListOfPlacesContainer>
    {arrayPlaces.map(el => (
      <LocationOption place={el.place} />
    ))}
  </ListOfPlacesContainer>
);

export default ListOfPlaces;

const StyledLocationOption = styled(LocationOption)``;

const ListOfPlacesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

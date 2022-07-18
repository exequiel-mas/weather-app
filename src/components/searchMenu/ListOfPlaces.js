import React from 'react';
import styled from 'styled-components';
import LocationOption from './LocationOption';
import { nanoid } from 'nanoid';

const arrayPlaces = [
  { place: 'London' },
  { place: 'Barcelona' },
  { place: 'Long Beach' },
];

const ListOfPlaces = () => (
  <ListOfPlacesContainer>
    {arrayPlaces.map(el => (
      <LocationOption key={nanoid()} place={el.place} />
    ))}
  </ListOfPlacesContainer>
);

export default ListOfPlaces;

const StyledLocationOption = styled(LocationOption)``;

const ListOfPlacesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

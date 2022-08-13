import React from "react";
import styled from "styled-components";
import LocationOption from "./LocationOption";
import { nanoid } from "nanoid";

const ListOfPlaces = ({ cityData, handleCoords }) => {
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });
  return (
    <ListOfPlacesContainer>
      {cityData.map((city) => (
        <LocationOption
          key={nanoid()}
          handleCoords={handleCoords}
          city={city.name}
          lat={city.lat}
          lon={city.lon}
          country={regionNamesInEnglish.of(city.country)}
        />
      ))}
    </ListOfPlacesContainer>
  );
};

export default ListOfPlaces;

const ListOfPlacesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

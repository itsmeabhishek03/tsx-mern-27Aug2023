import React, { useState, useEffect } from "react";
import axios from "axios";

const CharacterDetailsModal = ({ character }) => {
  const [homeworld, setHomeworld] = useState(null);

  useEffect(() => {
    axios.get(character.homeworld).then(
      (response) => {
        setHomeworld(response.data);
      },
      (error) => {
        console.error("Error fetching homeworld:", error);
      }
    );
  }, [character.homeworld]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    return formattedDate;
  };

  return (
    <div className="character-details-modal">
      <h2 className="character-details-name">{character.name}</h2>
      <p>Height: {character.height} meters</p>
      <p>Mass: {character.mass} kg</p>
      <p>Added to API: {formatDate(character.created)}</p>
      <p>Number of Films: {character.films.length}</p>
      <p>Birth Year: {character.birth_year}</p>
      {homeworld && (
        <div className="homeworld-details">
          <h3>Homeworld Information</h3>
          <p>Name: {homeworld.name}</p>
          <p>Terrain: {homeworld.terrain}</p>
          <p>Climate: {homeworld.climate}</p>
          <p>Residents: {homeworld.residents.length}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterDetailsModal;

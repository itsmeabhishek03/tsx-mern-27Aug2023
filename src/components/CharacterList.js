import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchFilter from "./SearchFilter";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people").then(
      (response) => {
        setCharacters(response.data.results);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading characters.</div>;
  }

  return (
    <div>
      <SearchFilter onSearch={handleSearch} />
      {filteredCharacters.map((character) => (
        <CharacterCard key={character.name} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;

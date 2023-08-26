import React, { useState } from "react";
import CharacterDetailsModal from "./CharacterDetailsModal";

const CharacterCard = ({ character }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showRandomImage, setShowRandomImage] = useState(false);

  const getRandomImage = () => {
    const randomImageId = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    return `https://picsum.photos/200/300?random=${randomImageId}`;
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleRandomImage = () => {
    setShowRandomImage(!showRandomImage);
  };

  return (
    <div
      className="character-card"
      style={{ backgroundColor: getBackgroundColor(character.species) }}
    >
      <div className="character-name">{character.name}</div>
      <button className="toggle-details-button" onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div className="character-details">
          <CharacterDetailsModal character={character} />
          <button className="toggle-image-button" onClick={toggleRandomImage}>
            Toggle Random Image
          </button>
        </div>
      )}
      {showRandomImage && (
        <div className="random-image">
          <img src={getRandomImage()} alt="Random" />
        </div>
      )}
    </div>
  );
};

const getBackgroundColor = (species) => {
  const speciesColors = {
    Human: "#ffcc00",
    Droid: "#66ccff",
    Wookiee: "#ff6600",
  };

  return speciesColors[species] || "lightgreen";
};

export default CharacterCard;

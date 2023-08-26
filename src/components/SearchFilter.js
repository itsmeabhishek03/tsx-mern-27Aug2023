import React, { useState } from "react";

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-filter">
      <input
        className="search-bar"
        type="text"
        placeholder="Ex. C-3PO, Luke Skywalker"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchFilter;

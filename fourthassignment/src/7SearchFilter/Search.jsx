import React, { useState } from 'react';

const SearchBar = ({ names }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          marginBottom: "10px",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index} style={{ listStyleType: "none", padding: "5px 0" }}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

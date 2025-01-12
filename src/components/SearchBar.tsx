import React from 'react';
import '../styles/SearchBar.css';

interface SearchBarProps {
  city: string;
  setCity: (value: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ city, setCity, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={city}
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

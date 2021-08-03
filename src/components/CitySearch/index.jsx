import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./CitySearch.scss";

export default function CitySearch({ getCity }) {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    const city = e.target.value;
    setCity(city);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCity(city);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        name="search-city"
        id="search-input"
        value={city}
        onChange={handleChange}
        placeholder="Tìm kiếm thành phố..."
      />
    </form>
  );
}

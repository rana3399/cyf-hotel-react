import React, { useState } from "react";
import SearchButton from "./SearchButton.js";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = event => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };

  const handleSubmit = e => {
    props.search(searchInput);
    e.preventDefault();
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>

      <form onSubmit={handleSubmit} className="form-group search-box">
        <label htmlFor="customerName">Customer name</label>
        <div className="search-row">
          <input
            onChange={handleSearchInput}
            value={searchInput}
            type="text"
            id="customerName"
            className="form-control"
            placeholder="Customer name"
          />
          <SearchButton />
        </div>
      </form>
    </div>
  );
};

export default Search;

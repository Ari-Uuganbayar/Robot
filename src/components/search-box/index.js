import React from "react";
import "./style.css";

export const SearchBox = (props) => (
  <input
    type="search"
    className="search-box"
    placeholder="Роботуудаас хайх..."
    onChange={props.onSearch}
  />
);

import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div >
      <Link to={"/activities"}>
        <button>To Activities</button>
      </Link>
      <h2>Filters</h2>
      <SearchBar/>
    </div>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to={"/activities"}>
        <button>To Activities</button>
      </Link>
      <h2>Filters</h2>
      <h3>Searchbar</h3>
    </div>
  );
};

export default NavBar;

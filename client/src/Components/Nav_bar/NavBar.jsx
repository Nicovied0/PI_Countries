import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to={"/activities"}>
        <button>To Activities</button>
      </Link>
      <Link to={"/activity"}>
        <button>Create Activities</button>
      </Link>
    </div>
  );
};

export default NavBar;

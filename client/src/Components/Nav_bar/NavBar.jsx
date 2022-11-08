import React from "react";
import { Link } from "react-router-dom";
import icon from '../../Assets/favicon.png'

const NavBar = () => {
  return (
    <div>
      <Link to={"/"}>
        <img src={icon} alt="" />
      </Link>
      <Link to={"/activitiesList"}>
        <button>To Activities</button>
      </Link>
      <Link to={"/activities"}>
        <button>Create Activities</button>
      </Link>
      <Link to={'/home'}> 
      <button>Home</button>
      </Link>
    </div>
  );
};

export default NavBar;

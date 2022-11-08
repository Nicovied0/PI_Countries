import React from "react";
import { Link } from "react-router-dom";
import icon from "../../Assets/favicon.png";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.container2}>
        <Link className={style.Link} to={"/"}>
          <img src={icon} alt="" />
        </Link>
        <Link className={style.Link} to={"/activitiesList"}>
          <button>To Activities</button>
        </Link>
        <Link className={style.Link} to={"/activities"}>
          <button>Create Activities</button>
        </Link>
        <Link className={style.Link} to={"/home"}>
          <button>Home</button>
        </Link>
      </div>
      <div className={style.container2}>
        <SearchBar />
      </div>
      <div className={style.container2}>
        <Filters />
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={style.container}>
      <Link to={"/home"}>
        <button className={style.button_home}>Home</button>
      </Link>
    </div>
  );
};

export default LandingPage;

import React from "react";
import Cards from "../Cards/Cards";
import NavBar from "../Nav_bar/NavBar";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <NavBar />
      </div>
      <Cards />
    </div>
  );
};

export default Home;

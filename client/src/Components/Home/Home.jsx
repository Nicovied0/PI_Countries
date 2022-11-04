import React from "react";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import NavBar from "../Nav_bar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.container}>
      <NavBar/>
      <SearchBar/>
      <Filters/>
      <Cards/>
    </div>
  );
};

export default Home;

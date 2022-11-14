import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  getActivities,
  orderByName,
  orderByPopulation,
  filterByContinent,
  filterByActivity,
} from "../../Redux/actions/index";
import { Link } from "react-router-dom";
import style from "./Cards.module.css";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import Paginate from "../Paginate/Paginate";
import {
  UPWARD,
  FALLING,
  MAX_POPULATION,
  MIN_POPULATION,
  ALL,
  ALL_OF_AFRICA,
  ALL_OF_N_AMERICA,
  ALL_OF_S_AMERICA,
  ALL_OF_ANTARCTICA,
  ALL_OF_ASIA,
  ALL_OF_EUROPE,
  ALL_OF_OCEANIA,
} from "../../Const/Const";
import SearchBar from "../SearchBar/SearchBar";

export default function Cards() {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries); //mapStateToProps.
  const activities = useSelector((state) => state.activities);
  // console.log(countries.length);

  //Paginate
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const lastCountry = currentPage === 1 ? 9 :  currentPage * countriesPerPage -1 ;
  const firstCountry = currentPage === 1 ? 0 : lastCountry - countriesPerPage;
  const currentCountry = countries.slice(firstCountry, lastCountry);
  const [, setOrder] = useState(""); //state of ordenamient (name, population)

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Order by Name
  function nameSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordering ${e.target.value}`);
  }

  //Order by population
  function populationSort(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordering ${e.target.value}`);
  }

  //Filter by continent
  function handleFilterContinent(e) {
    dispatch(filterByContinent(e.target.value));
    setCurrentPage(1);
  }

  //Filter by Activities
  function handleFilterActivity(e) {
    dispatch(filterByActivity(e.target.value));
    setCurrentPage(1);
  }

  //useEffect to dispatch actions
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      <SearchBar pages={setCurrentPage}/>
      
      <div className={style.selectdiv}>
        <select
          className={style.select}
          onChange={(e) => {
            nameSort(e);
          }}
        >
          <option value={UPWARD}> A-Z </option>
          <option value={FALLING}> Z-A </option>
        </select>

        <select
          className={style.select}
          onChange={(e) => {
            populationSort(e);
          }}
        >
          <option value={MAX_POPULATION}>Max population</option>
          <option value={MIN_POPULATION}>Min population</option>
        </select>

        <select
          className={style.select}
          onChange={(e) => handleFilterContinent(e)}
        >
          <option value={ALL}>All</option>
          <option value={ALL_OF_AFRICA}>Africa</option>
          <option value={ALL_OF_ANTARCTICA}>Antarctica</option>
          <option value={ALL_OF_N_AMERICA}>Nort America</option>
          <option value={ALL_OF_S_AMERICA}>South America</option>
          <option value={ALL_OF_ASIA}>Asia</option>
          <option value={ALL_OF_EUROPE}>Europe</option>
          <option value={ALL_OF_OCEANIA}>Oceania</option>
        </select>

        <select
          className={style.select}
          onChange={(e) => handleFilterActivity(e)}
        >
          <option value="All">Activities</option>
          {activities.map((v) => (
            <option value={v.name}>{v.name}</option>
          ))}
        </select>
      </div>

      <div className={style.containerCards}>
        {currentCountry.length !== 0 ? (
          currentCountry?.map((country) => {
            return (
              <div className={style.containeCardsDiv} key={country.id}>
                <Link
                  to={"/home/" + country.id}
                  className={style.Linkdecoration}
                >
                  <Card
                    name={country.name}
                    flag={country.flag}
                    continent={country.continent}
                    capital={country.capital}
                    population={country.population}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
      <div className={style.container}>
        <Paginate
          countriesPerPage={countriesPerPage}
          countries={countries.length}
          paginated={paginated}
        />
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, orderByName , orderByPopulation} from "../../Redux/actions/index";
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
} from "../../Const/Const";

export default function Cards() {
  const dispatch = useDispatch();
  
  const countries = useSelector((state) => state.countries); //mapStateToProps.
  console.log(countries.length);
  
  //Paginate
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const lastCountry = currentPage * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
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


  //useEffect to dispatch actions
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <div>

        <select
          onChange={(e) => {
            nameSort(e);
          }}
        >
          <option value={UPWARD}> A-Z </option>
          <option value={FALLING}> Z-A </option>
        </select>


        <select
          onChange={(e) => {
            populationSort(e);
          }}
        >
          <option value={MAX_POPULATION}>Max population</option>
          <option value={MIN_POPULATION}>Min population</option>
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

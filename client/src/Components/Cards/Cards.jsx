import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, orderByName } from "../../Redux/actions/index";
import { Link } from "react-router-dom";
import { UPWARD, FALLING } from "../../Const/Const";
import style from "./Cards.module.css";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import Paginate from "../Paginate/Paginate";

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

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //Order by Name

  const [, setOrdering] = useState(""); //state of alphabetical order

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrdering(`Ordering ${e.target.value}`);
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <div>
        <select
          onChange={(e) => {
            handleSort(e);
          }}
        >
          <option>Order by name</option>
          <option value={UPWARD}> A-Z </option>
          <option value={FALLING}> Z-A </option>
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

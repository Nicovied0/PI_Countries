import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../Redux/actions/index";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import Loader from "../Loader/Loader";
import { useState } from "react";

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
  const [,setOrdering] = useState('')

  const paginated = (pagenNum) =>{
    setCurrentPage(1)
  }

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  if (!currentCountry) {
    return <h2>Error</h2>;
  } else if (currentCountry.length === 0) {
    return <Loader />;
  } else {
    return (
      <div className={style.containerCards}>
        {currentCountry?.map((country) => {
          return (
            <div className={style.containeCardsDiv} key={country.id}>
              <Link to={"/home/" + country.id} className={style.Linkdecoration}>
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
        })}
      </div>
    );
  }
}

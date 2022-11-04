import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../Redux/actions/index";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards() {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  console.log(countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className={style.containerCards}>
      {countries?.map((country) => {
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

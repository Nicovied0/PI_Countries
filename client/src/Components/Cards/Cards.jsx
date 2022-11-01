import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../Redux/actions/index";
import Card from "../Card/Card";

export default function Cards() {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);
  console.log(countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      {
      countries?.map((country) => {
        return (
          <div key={country.id}>
            <Card
              name={country.name}
              flag={country.flag}
              continent={country.continent}
              capital={country.capital}
              population={country.population}
            />
          </div>
        );
      })}
    </div>
  );
}

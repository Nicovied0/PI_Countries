import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../Redux/actions/index";
import Card from "../Card/Card";

const Cards = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries)

  return <div>Cards</div>;
};

export default Cards;

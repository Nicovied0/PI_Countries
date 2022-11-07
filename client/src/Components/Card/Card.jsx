import React from "react";
import style from "./Card.module.css";

const Card = ({ name, flag, capital, continent }) => {
  return (
    <div className={style.cardContainer}>
      <h3>{name}</h3>
      <img className={style.cardImg} src={flag} alt="Imagen no encontrada" />
      <div className={style.cardDiv}>
        <h5 className="content">Capital: {capital}</h5>
        <h5 className="content">Continent: {continent}</h5>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "../Activities/Activities";
import style from './Activity.module.css'

const Activity = ({ name, duration, season, difficulty, countryId }) => {
  console.log(countryId)
  return (
    <div className={style.container}>
      <h2>{name}</h2>
      <h3>Duration: {duration} minutes.</h3>
      <h3>Season: {season}</h3>
      <h3>Difficulty: {difficulty} / 5</h3>
      <h3>{countryId}</h3>
    </div>
  );
};

export default Activity;

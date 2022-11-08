import React from "react";
import "../Activities/Activities";

const Activity = ({ name, duration, season, difficulty, countryId }) => {
  console.log(countryId)
  return (
    <div>
      <h2>{name}</h2>
      <h3>Duration: {duration}</h3>
      <h3>Season: {season}</h3>
      <h3>Difficulty: {difficulty}</h3>
      <h3>{countryId}</h3>
    </div>
  );
};

export default Activity;

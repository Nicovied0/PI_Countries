import React from "react";
import style from "./Filters.module.css";

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
  MAX_TO,
  MIN_TO,
  MAX_AREA,
  MIN_AREA,
} from "../../Const/Const";

const Filters = ({
  activities,
  nameSort,
  populationSort,
  handleFilterContinent,
  handleFilterActivity,
  handleFilterMaxTo,
  areaSort,
}) => {
  return (
    <div className={style.divFilters}>
      <h3 className={style.h3Filer}>Filtert By</h3>
      <select
        onChange={(e) => {
          nameSort(e);
        }}
      >
        <option disabled selected defaultValue={null}>
          Order
        </option>
        <option value={UPWARD}> A-Z </option>
        <option value={FALLING}> Z-A </option>
      </select>
      <select
        // className={style.select}
        onChange={(e) => {
          populationSort(e);
        }}
      >
        <option disabled selected>
          Order Population
        </option>
        <option value={MAX_POPULATION}>🡱 Max population</option>
        <option value={MIN_POPULATION}>🡳 Min population</option>
      </select>

      <select
        onChange={(e) => {
          areaSort(e);
        }}
      >
        <option disabled selected>
          Order By Area
        </option>
        <option value={MAX_AREA}>🡱 Area</option>
        <option value={MIN_AREA}>🡳 Area</option>
      </select>

      <select
        // className={style.select}
        onChange={(e) => handleFilterContinent(e)}
      >
        <option value={ALL}>All Continents</option>
        <option value={ALL_OF_AFRICA}>Africa</option>
        <option value={ALL_OF_ANTARCTICA}>Antarctica</option>
        <option value={ALL_OF_N_AMERICA}>Nort America</option>
        <option value={ALL_OF_S_AMERICA}>South America</option>
        <option value={ALL_OF_ASIA}>Asia</option>
        <option value={ALL_OF_EUROPE}>Europe</option>
        <option value={ALL_OF_OCEANIA}>Oceania</option>
      </select>

      <select
        // className={style.select}
        onChange={(e) => handleFilterActivity(e)}
      >
        <option value="All">All Activities</option>
        {activities.map((v) => (
          <option value={v.name}>{v.name}</option>
        ))}
      </select>

      {/* filters news */}

      <select onChange={(e) => handleFilterMaxTo(e)}>
        <option disabled selected defaultValue={null}>
          Countries with
        </option>
        <option value={MAX_TO}>🡱 100k population</option>
        <option value={MIN_TO}>🡳 100k population</option>
      </select>
    </div>
  );
};

export default Filters;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName,resetCountries ,pageBack} from "../../Redux/actions/index";
import style from "./SearchBar.module.css";

function SearchBar({pages}) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    if (search.length === 0) return alert("Enter some country");
    dispatch(getCountriesByName(search));
    dispatch(resetCountries())   //si quiero que no recargue cada vez que agrego una letra
     dispatch(getCountriesByName(search));
    setSearch("");
    pages(1) // setea la pag en 1
    dispatch(pageBack(1))
  }

  function onChangeInput(e) {
    e.preventDefault();
    // dispatch(resetCountries())   
    // dispatch(getCountriesByName(search));
    setSearch(e.target.value);
  }

  return (
    <div className={style.container}>
      <form onSubmit={onSubmit} className={style.form}>
        <input
          className={style.inputSearch}
          type="text"
          placeholder="Search Country"
          value={search}
          onChange={onChangeInput}
        ></input>
        <input className={style.inputButton} type="submit" value="Go"></input>
      </form>
    </div>
  );
};

export default SearchBar;

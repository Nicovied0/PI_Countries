import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../Redux/actions/index";
import style from "./SearchBar.module.css";

function SearchBar({pages}) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    if (search.length === 0) return alert("Enter some country");
    dispatch(getCountriesByName(search));
    setSearch("");
    pages(1)
  }

  function onChangeInput(e) {
    e.preventDefault();
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

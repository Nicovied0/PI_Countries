import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../Redux/actions/index";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    if (search.length === 0) return alert("Enter some country");
    dispatch(getCountriesByName(search));
    setSearch("");
  }

  function onChangeInput(e){
    e.preventDefault();
    setSearch(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Search Country" value={search} onChange={onChangeInput}></input>
      <input type="submit" value="Go"></input>
    </form>
  );
};

export default SearchBar;

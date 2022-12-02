import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  getActivities,
  orderByName,
  orderByPopulation,
  filterByContinent,
  filterByActivity,
  filterMaxTo,
  orderByArea,
  pageBack,
} from "../../Redux/actions/index";
import style from "./Cards.module.css";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import Paginate from "../Paginate/Paginate";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filers/Filters";
import Reload from "../Reload/Reload";

export default function Cards() {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries); //mapStateToProps.
  const activities = useSelector((state) => state.activities);
  var pagBack = useSelector((state) => state.pageBack);
  // console.log(countries.length);

  //Paginate
  let [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const lastCountry =
    currentPage === 1 ? 9 : currentPage * countriesPerPage - 1;
  const firstCountry = currentPage === 1 ? 0 : lastCountry - countriesPerPage;
  const currentCountry = countries.slice(firstCountry, lastCountry);
  const [, setOrder] = useState(""); //state of ordenamient (name, population)
  currentPage = pagBack
  console.log(pagBack,"soy current")

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
    dispatch(pageBack(pageNumber))
    window.scrollTo({ top: 0, behavior: "smooth" }); //SCROLL TO TOP, 
  };

  //Order by Name
  function nameSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    dispatch(pageBack(1))
    setOrder(`Ordering ${e.target.value}`);
    // console.log(setOrder,'soy order')
  }

  //Order by population
  function populationSort(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    dispatch(pageBack(1))
    setOrder(`Ordering ${e.target.value}`);
  }

  //Filter by continent
  function handleFilterContinent(e) {
    dispatch(filterByContinent(e.target.value));
    setCurrentPage(1);
    dispatch(pageBack(1))
  }

  //Filter by Activities
  function handleFilterActivity(e) {
    dispatch(filterByActivity(e.target.value));
    setCurrentPage(1);
    dispatch(pageBack(1))
  }

  ////////////////////////
  //Filter by Population max to
  function handleFilterMaxTo(e) {
    dispatch(filterMaxTo(e.target.value));
    setCurrentPage(1);
    dispatch(pageBack(1))
  }

  function areaSort(e) {
    e.preventDefault();
    dispatch(orderByArea(e.target.value));
    setCurrentPage(1);
    dispatch(pageBack(1))
    setOrder(`Ordering ${e.target.value}`);
  }
  ///////////////////////
  const handleOnClick = () => {
    window.location.reload();
  };
  //useEffect to dispatch actions
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
    dispatch(pageBack(1))
    AOS.init();
    AOS.refresh();
  }, [dispatch]);

  return (
    <div>
      <div className={style.divSeRe} data-aos="fade-right">
        <SearchBar pages={setCurrentPage} />
        <Reload handleOnClick={handleOnClick} />
      </div>

      <div className={style.selectdiv} data-aos="fade-up">
        <Filters
          activities={activities}
          nameSort={nameSort}
          populationSort={populationSort}
          handleFilterContinent={handleFilterContinent}
          handleFilterActivity={handleFilterActivity}
          handleFilterMaxTo={handleFilterMaxTo}
          areaSort={areaSort}
        />
      </div>

      <div className={style.containerCards}>
        {currentCountry.length !== 0 ? (
          currentCountry?.map((country) => {
            // console.log(index);
            return (
              <div className={style.containeCardsDiv} data-aos="zoom-in">
                <Link
                  to={"/home/" + country.id}
                  className={style.Linkdecoration}
                >
                  <Card
                    key={country.id}
                    name={country.name}
                    flag={country.flag}
                    continent={country.continent}
                    capital={country.capital}
                    population={country.population}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
      <div className={style.container} data-aos="fade-right">
        <Paginate
          currentPage={currentPage}
          countriesPerPage={countriesPerPage}
          countries={countries.length}
          paginated={paginated}
        />
      </div>
      {/* {console.log(Math.ceil(countries.length / countriesPerPage))} */}
    </div>
  );
}

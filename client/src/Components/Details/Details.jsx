import React, { useEffect } from "react";
import { getDetails } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import style from "./Details.module.css";

const Details = (props) => {
  const dispatch = useDispatch();
  const detailsCountry = useSelector((state) => state.details);
  console.log(detailsCountry[0]);

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  if (!detailsCountry) {
    return <h2>Error</h2>;
  } else if (
    detailsCountry.length === 0 ||
    detailsCountry[0].id !== props.match.params.id
  ) {
    return <Loader />;
  } else {
    console.log(detailsCountry[0].name);
    return (
      <div className={style.containerdetailsdiv}>
        <div className={style.containerdiv}>
          <div className={style.containerLink}>
            <Link to="/home">
              <button className={style.button_home}>Home</button>
            </Link>
          </div>
          <img
            className={style.img}
            src={detailsCountry[0].flag}
            alt="Imagen no't found"
          />
          <h1 className={style.h1}>{detailsCountry[0].name}</h1>
          <div className={style.divDetails}>
            <h3>Id: {detailsCountry[0].id}</h3>
            <h3>Capital: {detailsCountry[0].capital}</h3>
            <h3>Continent: {detailsCountry[0].continent}</h3>
            <h3>Subregion: {detailsCountry[0].subregion}</h3>
            <h3>Area: {detailsCountry[0].area} km2</h3>
            <h3>Population: {detailsCountry[0].population}</h3>
          </div>
        </div>
      </div>
    );
  }
};

export default Details;

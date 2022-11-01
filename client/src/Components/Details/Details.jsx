import React, { useEffect } from "react";
import { getDetails } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const Details = (props) => {
  const dispatch = useDispatch();
  const detailsCountry = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <div key={detailsCountry.id} className="detailE">
      <div>
      
      </div>

      <div className="detailContainer">
        {detailsCountry.length ? (
          <div className="detailContent">
            <img
              className="objDetail"
              src={detailsCountry[0].flag}
              alt="Imagen no encontrada"
              width="250px"
              height="175px"
            />
            <h1 className="objDetail">{detailsCountry[0].name}</h1>
            <div className="obj2Detail">
              <h2>Id: {detailsCountry[0].id}</h2>
              <h2>Capital: {detailsCountry[0].capital}</h2>
              <h2>Continente: {detailsCountry[0].continent}</h2>
              <h2>Subregion: {detailsCountry[0].subregion}</h2>
              <h2>Area: {detailsCountry[0].area} km2</h2>
              <h2>Poblacion: {detailsCountry[0].population}</h2>
            </div>
            
          </div>
        ) : (
          <div className="loading">
            <p> Loading... </p>
          </div>
        )}
      </div>
    </div>
  );
};

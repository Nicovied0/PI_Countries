import React from "react";
import styles from "./Paginate.module.css";

const Paginate = ({ currentPage,countriesPerPage, countries, paginated }) => {
  const pageNumber = [];
  for (let i = 1; i < Math.ceil(countries / countriesPerPage +1); i++) {
    pageNumber.push(i);
  }
  ///

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
      {currentPage !== 1 ? <button className={styles.butonPagination} onClick={() => paginated(currentPage -1)}>Back</button> : <button style={{visibility: "hidden"}}>Back</button>}
        {pageNumber &&
          pageNumber.map((number) => (
            <li key={number} className={styles.li}>
              <button
                className={styles.button}
                onClick={() => paginated(number)}
              >
                {number}
              </button>
            </li>
          ))}
          {currentPage !== Math.ceil(countries / countriesPerPage) 
          ? ( countries > 1 ? <button className={styles.butonPagination} onClick={() => paginated(currentPage + 1)}>Next</button> : <button style={{visibility: "hidden"}}>Next</button> ) 
          : <button style={{visibility: "hidden"}}>Next</button>}
      </ul>
    </div>
  );
};

export default Paginate;

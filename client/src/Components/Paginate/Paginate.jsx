import React from "react";
import styles from "./Paginate.module.css";

const Paginate = ({ countriesPerPage, countries, paginated }) => {
  const pageNumber = [];
  for (let i = 1; i < Math.ceil(countries / countriesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {pageNumber &&
        pageNumber.map((number) => (
          <li key={number} className={styles.li}>
            <button className={styles.button} onClick={() => paginated(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paginate;

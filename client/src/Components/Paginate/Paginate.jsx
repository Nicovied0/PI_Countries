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
            <a className={styles.a} href onClick={() => paginated(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paginate;

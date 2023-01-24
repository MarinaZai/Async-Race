import axios from "axios";
import React from "react";
import styles from "./styles.module.css";

export const WinnersPage = () => {
  let count = 3;
  return (
    <div className={styles.winners_page}>
      <h2 className={styles.winners_page_title}>Winners ({count})</h2>
      <p style={{color: "white"}}>Pagination</p> {/* CHANGE ON PAGINATION */}
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Car</th>
            <th>Name</th>
            <th>Wins</th>
            <th>Best time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="Number">1</td>
            <td data-column="Car">img</td>
            <td data-column="Name">bmw</td>
            <td data-column="Wins">20</td>
            <td data-column="Best time">20</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};

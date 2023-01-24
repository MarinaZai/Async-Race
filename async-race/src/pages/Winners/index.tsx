import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import styles from "./styles.module.css";
import { CarIcon } from "../../components/CarIcon";

export const WinnersPage = () => {
  const [winners, setWinners] = useState<any[]>([]);

  const getWinners = async () => {
    const response = await axios.get(`${BASE_URL}/winners?_limit=7&_page=${1}`);
    setWinners(response.data);
  };
  useEffect(() => {
    getWinners();
  }, []);


  return (
    <div className={styles.winners_page}>
      <h2 className={styles.winners_page_title}>Winners ({winners.length})</h2>
      <p style={{ color: "white" }}>Pagination</p> {/* CHANGE ON PAGINATION */}
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
          {winners.map((item, index) => {
            return (
              <tr key={item.id}>
                <td data-column="Number">{index + 1}</td>
                <td data-column="Car">
                  <CarIcon fill={item.color} />
                </td>
                <td data-column="Name">{item.name}</td>
                <td data-column="Wins">{item.wins}</td>
                <td data-column="Best time">{item.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

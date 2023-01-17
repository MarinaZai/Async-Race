import axios from "axios";
import React from "react";
import { MainOptions } from "../../components/Main-page-components/MainOptions";
import styles from "./styles.module.css";
axios.get('http://localhost:3000/db ').then(response => {
  //console.log(response)
})
export const MainPage = () => {
  return (
    <div className={styles.main_container}>
      <MainOptions />
    </div>
  );
};

import React from "react";
import { MainOptions } from "../../components/Main-page-components/MainOptions";
import styles from "./styles.module.css";

export const MainPage = () => {
  return (
    <div className={styles.main_container}>
      <MainOptions />
    </div>
  );
};

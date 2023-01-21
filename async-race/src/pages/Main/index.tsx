import React from "react";
import { MainContainer } from "../../components/Main-page-components/MainContainer";
import { MainOptions } from "../../components/Main-page-components/MainOptions";
import styles from "./styles.module.css";

export const MainPage = () => {
  
  return (
    <div className={styles.main_page}>
      <MainOptions />
      <MainContainer />
    </div>
  );
};

import React from "react";
import styles from "./styles.module.css";

type HeaderButtonPropsType = {
  title: string;
};

export const HeaderButton: React.FC<HeaderButtonPropsType> = ({ title }) => {
  return <button className={styles.header_button}>{title}</button>;
};

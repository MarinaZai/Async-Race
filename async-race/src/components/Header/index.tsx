import React from "react";
import styles from "./styles.module.css";

type HeaderPropsType = {
  title: string;
};

export const Header: React.FC<HeaderPropsType> = ({ title }) => {
  return <div className={styles.wrapper}>{title}</div>;
};

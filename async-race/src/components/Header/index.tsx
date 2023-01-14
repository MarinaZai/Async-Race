import React from "react";
import { HeaderButton } from "./Header-button/index";
import styles from "./styles.module.css";

type HeaderPropsType = {
  title: string;
};

export const Header: React.FC<HeaderPropsType> = ({ title }) => {
  return (
    <header className={styles.header_wrapper}>
      <a href = "/" className={styles.header_wrapper_title}>{title}</a>
      <div className={styles.header_wrapper_buttons}>
        <HeaderButton title="To garage" />
        <HeaderButton title="Winners" />
      </div>
    </header>
  );
};

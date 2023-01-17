import React from "react";
import { Link } from "react-router-dom";
import { HeaderButton } from "./Header-button/index";
import styles from "./styles.module.css";

type HeaderPropsType = {
  title: string;
};

export const Header: React.FC<HeaderPropsType> = ({ title }) => {
  return (
    <header className={styles.header_wrapper}>
      <Link to="/">
        <a href="/" className={styles.header_wrapper_title}>
          {title}
        </a>
      </Link>
      <div className={styles.header_wrapper_buttons}>
        <Link to="/">
          <HeaderButton title="To garage" />
        </Link>
        <Link to="/winners">
          <HeaderButton title="Winners" />
        </Link>
      </div>
    </header>
  );
};

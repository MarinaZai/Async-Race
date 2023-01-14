import React from "react";
import { HeaderButton } from "./Header-button/index";
import styles from "./styles.module.css";

type HeaderPropsType = {
  title: string;
};

export const Header: React.FC<HeaderPropsType> = ({ title }) => {
  return (
    <header className={styles.header_wrapper}>
      {title}
      <HeaderButton title="To garage" />
      <HeaderButton title="Winners" />
      <div className={styles.new_class}>X</div>
    </header>
  );
};

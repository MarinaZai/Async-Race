import React from "react";
import { cars } from "../../../../data";
import styles from "./styles.module.css";

export const CreateCar = () => {
  const someFun = () => {
    console.log('hello i am button')
  }

  return (
    <div className={styles.create_container}>
      <select id="select">
        {cars.mark.map((car) => (
          <option key={car} value={car}>
            {car}
          </option>
        ))}
        ;
      </select>
      <input type="color" id="head" name="head" defaultValue="#707070"></input>
      <button onClick={someFun} >CREATE</button>
    </div>
  );
};

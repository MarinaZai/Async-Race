import React, { ChangeEvent, useState } from "react";
import { cars } from "../../../../data";
import styles from "./styles.module.css";

type CreateCarPropsType = {
  createCarHandler: (name: string, color: string) => void;
};

export const CreateCar: React.FC<CreateCarPropsType> = ({
  createCarHandler,
}) => {
  const [mark, setMark] = useState("Bmw");
  const [color, setColor] = useState("#BB3E3E");

  const selectMarkNameHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setMark(e.target.value);
  };
  const selectColorHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const createCar = () => {
    createCarHandler(mark, color);
  };

  return (
    <div className={styles.create_container}>
      <select id="select" onChange={selectMarkNameHandler} value={mark}>
        {cars.mark.map((car) => (
          <option key={car} value={car}>
            {car}
          </option>
        ))}
        ;
      </select>
      <input
        type="color"
        id="head"
        name="head"
        value={color}
        onChange={selectColorHandler}
      ></input>

      <button onClick={createCar}>CREATE</button>
    </div>
  );
};

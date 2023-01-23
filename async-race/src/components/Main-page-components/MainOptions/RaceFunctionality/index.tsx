import React from "react";
import { cars } from "../../../../data";
import { ICar } from "../../../../interfaces";
import styles from "./styles.module.css";

export const RaceFunctionality = (props: {
  setIsAnimationStarted: (isStarted: boolean) => void;
  createCars: (cars: { name: string; color: string }[]) => void;
}) => {
  const generateRandomColor = (min = 0, max = 255) => {
    const random = () => min + Math.floor(Math.random() * (max - min + 1));
    const red = random();
    const green = random();
    const blue = random();
    return `rgb(${red},${green},${blue})`;
  };
  const generateRandomCarName = () => {
    const { mark, model } = cars;
    const generateNameCar = `${mark[Math.floor(Math.random() * mark.length)]} ${
      model[Math.floor(Math.random() * model.length)]
    }`;
    return generateNameCar;
  };

  const genereateCars = () => {
    let cars: Omit<ICar, "id">[] = [];
    for (let i = 0; i <= 100; i++) {
      cars.push({
        name: generateRandomCarName(),
        color: generateRandomColor(),
      });
    }
    props.createCars(cars);
  };

  return (
    <div className={styles.race_functionality_container}>
      <button
        onClick={() => {
          props.setIsAnimationStarted(true);
        }}
      >
        RACE
      </button>
      <button
        onClick={() => {
          props.setIsAnimationStarted(false);
        }}
      >
        RESET
      </button>
      <button onClick={genereateCars}>GENERATE CARS</button>
    </div>
  );
};

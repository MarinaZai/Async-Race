import React from "react";
import { ICar } from "../../../interfaces";
import { CarRace } from "../CarRace";
import styles from "./styles.module.css";

type MainContainerPropsType = {
  cars: ICar[];
  deleteCar: (id: number) => void;
  selectedCar: ICar | null;
  setSelectedCar: (selectedCar: ICar) => void;
  isAnimationStarted: boolean;
  setIsAnimationStarted: (isStarted: boolean) => void;
  totalCount: number;
  isAnimationStated: boolean;
};

export const MainContainer: React.FC<MainContainerPropsType> = ({
  cars,
  selectedCar,
  deleteCar,
  setSelectedCar,
  isAnimationStarted,
  setIsAnimationStarted,
  totalCount,
}) => {
  const createStartGarage = () => {
    return (
      <div>
        {cars.map((item: ICar) => {
          return (
            <CarRace
              key={item.id}
              car={item}
              selectedCar={selectedCar}
              deleteCar={deleteCar}
              setSelectedCar={setSelectedCar}
              startRace={isAnimationStarted}
              setIsAnimationStarted={setIsAnimationStarted}
              isAnimationStarted={isAnimationStarted}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.main_container}>
      <p className={styles.main_container_title_garage}>GARAGE({totalCount})</p>
      {createStartGarage()}
    </div>
  );
};

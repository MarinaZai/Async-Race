import React, { useEffect } from "react";
import { ICar } from "../../../interfaces";
import { CarIcon } from "../../CarIcon";
import { CarRace } from "../CarRace";
import styles from "./styles.module.css";

type MainContainerPropsType = {
  cars: ICar[];
  deleteCar: (id: number) => void;
  selectedCar: ICar | null;
  setSelectedCar: (selectedCar: ICar) => void;
  isAnimationStarted: boolean;
  setIsAnimationStarted: (isStarted: boolean) => void
};

export const MainContainer: React.FC<MainContainerPropsType> = ({
  cars,
  selectedCar,
  deleteCar,
  setSelectedCar,
  isAnimationStarted,
  setIsAnimationStarted
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
              duration={10000}
            />
          );
        })}
      </div>
    );
  };

  return <div className={styles.main_container}>{createStartGarage()}</div>;
};

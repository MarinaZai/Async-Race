import { useEffect, useRef } from "react";
import { useAnimationFrame } from "../../../hooks";
import { ICar } from "../../../interfaces";
import { CarIcon } from "../../CarIcon";
import { ControllerCar } from "../ControllerCar";
import styles from "./styles.module.css";

type CarRacePropsType = {
  car: ICar;
  deleteCar: (id: number) => void;
  selectedCar: ICar | null;
  setSelectedCar: (selectedCar: ICar) => void;
  startRace: boolean;
  setIsAnimationStarted: (isStarted: boolean) => void;
  duration: number;
};

export const CarRace: React.FC<CarRacePropsType> = ({
  car,
  deleteCar,
  selectedCar,
  setSelectedCar,
  startRace = false,
  setIsAnimationStarted,
  duration,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const divContainerRef = useRef<HTMLDivElement>(null);

  const nextAnimationFrameHandler = (progress: any) => {
    const brick = divContainerRef.current;
    if (brick) {
      const currentLeft = Number(brick.style.left.replace("px", "") || 0);

      if (progress < 1) {
        brick.style.left = `${containerRef.current?.offsetWidth! * progress}px`;
      } else {
        setIsAnimationStarted(false);
        brick.style.left = containerRef.current?.offsetWidth + `px`;
      }
    }
  };

  useAnimationFrame({
    nextAnimationFrameHandler,
    duration: duration,
    shouldAnimate: startRace,
  });

  return (
    <div
      key={car.id + car.name}
      style={{
        borderBottom: "solid",
        borderBottomColor: "white",
        borderBottomStyle: "dashed",
        marginBottom: "2%",
      }}
    >
      <ControllerCar
        car={car}
        deleteCar={deleteCar}
        selectedCar={selectedCar}
        setSelectedCar={setSelectedCar}
      />
      <p style={{ color: "white", fontWeight: "600", margin: "0" }}>
        {car.name}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "7%",
        }}
        ref={containerRef}
      >
        <div className={styles.icon_container} ref={divContainerRef}>
          <CarIcon fill={car.color} />
        </div>
        <img src="winner-place.svg" alt="race-car" />
      </div>
    </div>
  );
};

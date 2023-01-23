import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../../../constants";
import { useAnimationFrame } from "../../../hooks/useAnimationFrame";
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
  isAnimationStarted: boolean;
};

export const CarRace: React.FC<CarRacePropsType> = ({
  car,
  deleteCar,
  selectedCar,
  setSelectedCar,
  startRace = false,
  isAnimationStarted,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const divContainerRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);
  const [isStart, setIsStart] = useState(startRace);

  const startStopEngine = async (id: number, staus: "started" | "stopped") => {
    const result = await axios.patch<{ velocity: number; distance: number }>(
      `${BASE_URL}/engine?id=${id}&status=${staus}`,
    );
    setDuration(result.data.distance / result.data.velocity);
  };

  useEffect(() => {
    startStopEngine(car.id, "started");
  }, [isAnimationStarted]);

  const nextAnimationFrameHandler = (progress: number) => {
    const brick = divContainerRef.current;
    if (brick) {
      const currentLeft = Number(brick.style.left.replace("px", "") || 0);

      if (progress < 1) {
        brick.style.left = `${containerRef.current?.offsetWidth! * progress}px`;
      } else {
        brick.style.left = containerRef.current?.offsetWidth + `px`;
      }
    }
  };

  useEffect(() => {
    if (!isAnimationStarted || !isStart) {
      const brick = divContainerRef.current;
      if (brick) {
        brick.style.left = "0";
      }
    }
  }, [isAnimationStarted, isStart]);

  useEffect(() => {
    setIsStart(startRace);
  }, [startRace]);

  useAnimationFrame({
    nextAnimationFrameHandler,
    duration: duration,
    shouldAnimate: isStart,
  });

  return (
    <div className={styles.car_race_block} key={car.id + car.name}>
      <ControllerCar
        car={car}
        deleteCar={deleteCar}
        selectedCar={selectedCar}
        setSelectedCar={setSelectedCar}
        setIsStart={setIsStart}
      />
      <p style={{ color: "white", fontWeight: "600", margin: "0" }}>
        {car.name}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "10%",
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

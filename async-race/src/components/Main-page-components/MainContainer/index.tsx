import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../constants";
import { ICar } from "../../../interfaces";
import { WinnersPage } from "../../../pages/Winners";
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
    const [winner, setWinner] = useState<
      | ({
          time: number;
        } & ICar)
      | null
    >(null);

    const getWinner = async (id: number) => {
      try {
        const result = await axios.get<{
          id: number;
          wins: number;
          time: number;
        }>(`${BASE_URL}/winners/${id}`);
        return result.data;
      } catch (error) {
        throw new Error("winner not exist");
      }
    };

    const createWinner = async (payload: {
      id: number;
      wins: number;
      time: number;
    }) => {
      try {
        const result = await axios.post<{
          id: number;
          wins: number;
          time: number;
        }>(`${BASE_URL}/winners`, payload);
      } catch (error) {
        console.log(error);
      }
    };

    const updateWinner = async (payload: {
      id: number;
      wins: number;
      time: number;
    }) => {
      const result = await axios.put<{
        id: number;
        wins: number;
        time: number;
      }>(`${BASE_URL}/winners/${payload.id}`, {
        wins: payload.wins,
        time: payload.time,
      });
    };

    const winnerHandler = async (payload: { id: number; time: number }) => {
      try {
        const winner = await getWinner(payload.id);
        if (winner)
          updateWinner({
            id: payload.id,
            wins: winner.wins + 1,
            time: payload.time,
          });
      } catch (error) {
        createWinner({ ...payload, wins: 1 });
      }
    };

    useEffect(() => {
      if (isAnimationStarted) {
        setWinner(null);
      }
    }, [isAnimationStarted]);
    useEffect(() => {
      if (winner) {
        winnerHandler(winner);
      }
    }, [winner]);
    return (
      <div>
        {winner && (
          <h2
            style={{
              color: "white",
              position: "absolute",
              top: "50%",
              left: "25%",
              textShadow: "#FC0 1px 0 10px",
            }}
          >
            {"Winner" +
              " " +
              winner?.name +
              " " +
              "with time:" +
              " " +
              winner.time +
              " " +
              "seconds"}
          </h2>
        )}
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
              winnerHandler={setWinner}
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

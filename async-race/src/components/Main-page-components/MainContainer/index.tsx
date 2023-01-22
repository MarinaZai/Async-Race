import React, { useEffect } from "react";
import { ICar } from "../../../interfaces";
import { CarIcon } from "../../CarIcon";
import styles from "./styles.module.css";

type MainContainerPropsType = {
  cars: ICar[];
  deleteCar: (id:number)=>void
};

export const MainContainer: React.FC<MainContainerPropsType> = ({ cars,deleteCar }) => {
  const createControllerCar = (id:number) => {
    return (
      <div className={styles.buttons_controller}>
        <div style={{ paddingBottom: "1%", paddingRight: "1%" }}>
          <button
            style={{ marginRight: "1%" }}
            className={styles.button_controller_top}
          >
            select
          </button>
          <button className={styles.button_controller_top} onClick={()=>{deleteCar(id)}}>remove</button>
        </div>
        <div>
          <button
            style={{ marginRight: "1%" }}
            className={styles.button_controller_bottom}
          >
            start
          </button>
          <button className={styles.button_controller_bottom}>restart</button>
        </div>
      </div>
    );
  };

  const createStartGarage = () => {
    return (
      <div>
        {cars.map((item: ICar) => {
          return (
            <div
              key={item.id + item.name}
              style={{
                borderBottom: "solid",
                borderBottomColor: "white",
                borderBottomStyle: "dashed",
                marginBottom: "2%",
              }}
            >
              {createControllerCar(item.id)}
              <p style={{ color: "white", fontWeight: "600", margin: "0" }}>
                {item.name}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: "7%",
                }}
              >
                <CarIcon fill={item.color}/>
                <img src="winner-place.svg" alt="race-car" />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return <div className={styles.main_container}>{createStartGarage()}</div>;
};

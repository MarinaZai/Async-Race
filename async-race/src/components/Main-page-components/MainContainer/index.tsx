import axios from "axios";
import React, { useEffect } from "react";
import { ICar } from "../../../interfaces";
import styles from "./styles.module.css";

export const MainContainer = () => {
  const arrStartCar: any = localStorage.getItem("start-garage");

  useEffect(() => {
    axios.get("http://localhost:3000/garage").then((response) => {
      let startCar = response.data;
      localStorage.setItem("start-garage", JSON.stringify(startCar));
    });
    /* axios.post("http://localhost:3000/garage", {
      name: "Super car",
      color: "#ff0000"
    }) */
  }, []);

  const createControllerCar = () => {
    return (
      <div className={styles.buttons_controller}>
        <div style={{ paddingBottom: "1%", paddingRight: "1%" }}>
          <button style={{ marginRight: "1%" }} className={styles.button_controller_top}>select</button>
          <button className={styles.button_controller_top}>remove</button>
        </div>
        <div>
          <button style={{ marginRight: "1%" }} className={styles.button_controller_bottom}>start</button>
          <button className={styles.button_controller_bottom}>restart</button>
        </div>
      </div>
    );
  };
  
  const createStartGarage = () => {
    if (arrStartCar !== null) {
      let arr = JSON.parse(arrStartCar);
      return (
        <div>
          {arr.map((item: ICar) => {
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
                {createControllerCar()}
                <p style={{ color: "white",fontWeight:"600", margin: "0" }}>{item.name}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "7%",
                  }}
                >
                  <img src="race-car.svg" alt="race-car" />
                  <img src="winner-place.svg" alt="race-car" />
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return <div className={styles.main_container}>{createStartGarage()}</div>;
};

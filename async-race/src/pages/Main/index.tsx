import React, { useEffect, useState } from "react";
import axios from "axios";
import { MainContainer } from "../../components/Main-page-components/MainContainer";
import { MainOptions } from "../../components/Main-page-components/MainOptions";
import styles from "./styles.module.css";
import { ICar } from "../../interfaces";
import { BASE_URL } from "../../constants";

export const MainPage = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [selectedCar, setSelectedCar] = useState<ICar | null>(null)

  const deleteCar = (id:number) =>{
    axios
    .delete(`${BASE_URL}/garage/${id}`)
    .then(() => {
      getCars();
    });
  }

  const createCarHandler = (name: string, color: string) => {
    axios
      .post(`${BASE_URL}/garage`, {
        name: name,
        color: color,
      })
      .then(() => {
        getCars();
      });
  };

  const getCars = async () => {
    const startCars = await axios.get(`${BASE_URL}/garage`);
    setCars(startCars.data);
  };

  useEffect(() => {
    getCars();
  }, []);
  return (
    <div className={styles.main_page}>
      <MainOptions createCarHandler={createCarHandler} />
      <MainContainer cars={cars} deleteCar={deleteCar}/>
    </div>
  );
};

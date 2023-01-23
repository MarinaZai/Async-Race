import React, { useEffect, useState } from "react";
import axios from "axios";
import { MainContainer } from "../../components/Main-page-components/MainContainer";
import { MainOptions } from "../../components/Main-page-components/MainOptions";
import styles from "./styles.module.css";
import { ICar } from "../../interfaces";
import { BASE_URL } from "../../constants";
import Pagination from "../../components/Pagination";

export const MainPage = () => {
  const [cars, setCars] = useState<ICar[]>([]);
  const [selectedCar, setSelectedCar] = useState<ICar | null>(null);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)

  const getCars = async () => {
    const response = await axios.get(`${BASE_URL}/garage?_limit=7&_page=${currentPage}`);
    setCars(response.data);
    setTotalCount(response.headers["x-total-count"] ? +response.headers["x-total-count"] : 0)
  };

  const updateCar = (name: string, color: string) => {
    if (!selectedCar) {
      return;
    }
    axios
      .put(`${BASE_URL}/garage/${selectedCar.id}`, {
        name: name,
        color: color,
      })
      .then(() => {
        getCars();
        setSelectedCar(null);
      });
  };

  const deleteCar = (id: number) => {
    axios.delete(`${BASE_URL}/garage/${id}`).then(() => {
      getCars();
    });
  };

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

  const createCars = (cars: Omit<ICar, 'id'>[]) => {
    Promise.all(cars.map((car) => {
      axios
      .post(`${BASE_URL}/garage`, {
        name: car.name,
        color: car.color,
      })
    })).then(() => {
      getCars();
    })
  }

  useEffect(() => {
    getCars();
  }, [currentPage]);

  return (
    <div className={styles.main_page}>
      <MainOptions
        createCarHandler={createCarHandler}
        updateCar={updateCar}
        setIsAnimationStarted={setIsAnimationStarted}
        createCars={createCars}
      />
      <MainContainer
        cars={cars}
        deleteCar={deleteCar}
        selectedCar={selectedCar}
        setSelectedCar={setSelectedCar}
        isAnimationStarted={isAnimationStarted}
        setIsAnimationStarted={setIsAnimationStarted}
        totalCount={totalCount}
        isAnimationStated={isAnimationStarted}
      />
      <Pagination
        buttonConst={3}
        contentPerPage={7}
        siblingCount={1}
        totalPageCount={Math.ceil(totalCount / 7)}
        curentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

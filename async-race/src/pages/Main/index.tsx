import React from "react";
import { CreateCar } from "../../components/Main-page-components/CreateCar";
import { RaceFunctionality } from "../../components/Main-page-components/RaceFunctionality";
import { UpdateCar } from "../../components/Main-page-components/UpdateCar";

export const MainPage = () => {
  return (
    <div>
      MainPage
      <CreateCar />
      <UpdateCar />
      <RaceFunctionality />
    </div>
  );
};

import React from "react";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div>
      <Header title="Header from app" />
      Hello, this is {process.env.name} app!
      <img src="../src/assets/race-car.svg" alt="" />
    </div>
  );
};

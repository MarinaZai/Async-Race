import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { MainPage } from "./pages/Main";
import { WinnersPage } from "./pages/Winners";

export const App = () => {
  /* const router = (route: string) => {
    switch (route) {
      case "/":
        return <MainPage />;
      case "/winners":
        return <WinnersPage />;
      default:
        return <div>404</div>;
    }
  }; */

  return (
    <div>
      <Header title="ASYNC-RACE GAME" />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/winners" element={<WinnersPage />} />
      </Routes>
    </div>
  );
};

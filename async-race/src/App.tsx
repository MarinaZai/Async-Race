import React from "react";
import { Header } from "./components/Header";
import { MainPage } from "./pages/Main";
import { WinnersPage } from "./pages/Winners";

const enum Routes {
  main = "/",
  winners = "/winners",
}

export const App = () => {
  const router = (route: string) => {
    switch (route) {
      case "/":
        return <MainPage />;
      case "/winners":
        return <WinnersPage />;
      default:
        return <div>404</div>;
    }
  };

  return (
    <div>
      <Header title="ASYNC-RACE GAME" />
      {router('/')}
    </div>
  );
};

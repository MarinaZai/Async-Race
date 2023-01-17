import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./style.css";
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

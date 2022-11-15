import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Calendar from "./views/Calendar/Calendar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Calendar />);

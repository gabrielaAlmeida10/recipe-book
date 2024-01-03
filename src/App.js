import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import Menu from "./components/Menu/menu";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes />
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/authContext";

import Menu from "./components/menu/Menu";

import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import { useAuthentication } from "./hooks/useAuthentication";
import { onAuthStateChanged } from "firebase/auth";

import Menu from "./components/menu/Menu";

import "./App.css";

const App = () => {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  //assigning the user's loading state the value of the user compared to undefined
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <AuthProvider value={{user}}>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

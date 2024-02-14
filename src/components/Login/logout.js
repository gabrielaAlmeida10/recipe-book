import React from "react";
import { useNavigate } from "react-router-dom"; // Importando o useNavigate
import { useAuthentication } from "../../hooks/useAuthentication";
import { signOut } from "firebase/auth";


const LogoutButton = () => {
  const { auth } = useAuthentication();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
       // Redirecionando para a página principal após o login
       navigate("/"); // Navegando para a rota especificada
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
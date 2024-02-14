import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando o useNavigate
import { useAuthentication } from "../../hooks/useAuthentication";
import { signInWithEmailAndPassword } from "firebase/auth"; // Adicionando importação necessária


import "./login.css";

const LoginPage = () => {
  const navigate = useNavigate(); // Inicializando o useNavigate
  const { auth, error, loading } = useAuthentication();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirecionando para a página principal após o login
      navigate("/"); // Navegando para a rota especificada
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          Login
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
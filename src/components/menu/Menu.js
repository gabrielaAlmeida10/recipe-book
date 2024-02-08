import React from "react";
import { Link } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/authContext";

import "./Menu.css";

const Menu = () => {
  const { user } = useAuthValue();

  return (
    <nav className="menu">
      <div className="brand-name">
        <Link to="/recipe-book">
          <h1>Recipe Book</h1>
        </Link>
        <Link to="/NewRecipe">
          <h3>New Recipe</h3>
        </Link>
        <Link to="/OrderList">
          <h3>Order</h3>
        </Link>
        <Link to="/NewOrder">
        <h3>New Order</h3>
        </Link>
        {!user && (
          <>
            <Link to="/login">
              <h3>Login</h3>
            </Link>
            <Link to="/register">
              <h3>Register</h3>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Menu;

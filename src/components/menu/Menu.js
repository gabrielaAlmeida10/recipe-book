import React from "react";
import { Link } from "react-router-dom";

import "./menu.css";

const Menu = () => {
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
        <Link to="/login">
          <h3>Login</h3>
        </Link>
        <Link to="/register">
          <h3>Register</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;

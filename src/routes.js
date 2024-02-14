import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Gallery from "./components/GalleryView/gallery";
import NewRecipe from "./components/NewRecipe/newRecipe";
import NewOrder from "./components/newOrder/NewOrder";
import OrderList from "./components/OrderList/orderList";
import Login from "./components/Login/login";
import Register from "./components/Register/register";

function routes() {
  return (
    <Routes>
       <Route path="/" element={<Gallery />} /> 
       <Route path="/recipe-book" element={<Gallery />} /> 
       <Route path="/NewRecipe" element={<NewRecipe />} />
       <Route path="/NewOrder" element={<NewOrder />} />
       <Route path="/OrderList" element={<OrderList />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Register" element={<Register />} /> 
    </Routes>
  );
}

export default routes;

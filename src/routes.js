import React from "react";
import { Routes, Route } from "react-router-dom";

import Gallery from "./components/galleryView/Gallery";
import NewRecipe from "./components/newRecipe/NewRecipe";
import NewOrder from "./components/newOrder/newOrder";
import OrderList from "./components/orderList/orderList";

function routes() {
  return (
    <Routes>
       <Route path="/" element={<Gallery />} /> 
       <Route path="/recipe-book" element={<Gallery />} /> 
       <Route path="/NewRecipe" element={<NewRecipe />} />
       <Route path="/NewOrder" element={<NewOrder />} />
       <Route path="/OrderList" element={<OrderList />} />
    </Routes>
  );
}

export default routes;

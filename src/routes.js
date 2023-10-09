import React from "react";
import { Routes, Route } from "react-router-dom";

import Gallery from "./components/galleryView/Gallery";
import NewRecipe from "./components/newRecipe/NewRecipe";

function routes() {
  return (
    <Routes>
       <Route path="/" element={<Gallery />} /> 
       <Route path="/Gallery" element={<Gallery />} /> 
       <Route path="/NewRecipe" element={<NewRecipe />} />
    </Routes>
  );
}

export default routes;

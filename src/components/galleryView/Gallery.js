import React, { useState, useEffect } from "react";

import GalleryFilter from "./galleryFilter";
import recipes from "../../data/recipes.json";

import "./galleryView.css";

const Gallery = () => {
  const [recipe, setRecipe] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filter, setFilter] = useState("Todos");

  //load the data from the JSON
  useEffect(() => {
    setRecipe(recipes);
  }, []);

  const showDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeDetails = () => {
    setSelectedRecipe(null);
  };

  const filterRecipe = (type) => {
    setFilter(type);
  };

  const filteredRecipes =
    filter === "Todos"
      ? recipe
      : recipe.filter((recipe) => recipe.type === filter);

  return (
    <div className="gallery-container">
      <GalleryFilter onFilterChange={filterRecipe} />
      <h1>Caderno de Receitas</h1>
      <div className="gallery">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe"
            onClick={() => showDetails(recipe)}
          >
            <h3>{recipe.nome}</h3>
          </div>
        ))}
      </div>
      {selectedRecipe && (
        <div className="details">
          <button onClick={closeDetails}>X</button>
          <h2>{selectedRecipe.nome}</h2>
          <p>Ingredientes: {selectedRecipe.ingredientes.join(", ")}</p>
          <p>Recheio: {selectedRecipe.recheio}</p>
          <p>Instruções: {selectedRecipe.instrucoes}</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;

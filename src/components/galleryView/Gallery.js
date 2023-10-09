import React, { useState, useEffect } from "react";

import GalleryFilter from "./GalleryFilter";
import recipes from "../../data/recipes.json";

import "./GalleryView.css";

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
  }

  const filteredRecipes = filter === "Todos" ? recipe : recipe.filter(recipe => recipe.type === filter);

  return (
    <div className="gallery-container">
      <GalleryFilter onFilterChange={filterRecipe}/>
      <div className="gallery">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe"
            onClick={() => showDetails(recipe)}
          >
            <img src={recipe.photo}  alt={`Foto de ${recipe.nome}`} />
            <h3>{recipe.nome}</h3>
          </div>
        ))}
      </div>
      {selectedRecipe && (
        <div className="details">
          <button onClick={closeDetails}>X</button>
          <img src={selectedRecipe.photo} alt={`Foto de ${selectedRecipe.nome}`}/>
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

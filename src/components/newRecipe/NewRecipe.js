// NewRecipe.js
import React, { useState } from "react";
import RecipeForm from "./RecipeForm";

import "./NewRecipe.css";

const NewRecipe = (props) => {
  const [isEditing, setIsEditing] = useState(true);

  const saveRecipeDataHandler = (enteredRecipeData) => {
    const recipeData = {
      ...enteredRecipeData,
      id: Math.random().toString(),
    };
    console.log(recipeData);
    setIsEditing(false);
  };

  return (
    <div className="new-recipe">
      <RecipeForm onSaveRecipeData={saveRecipeDataHandler} />
    </div>
  );
};

export default NewRecipe;

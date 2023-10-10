// NewRecipe.js
import React  from "react";
import RecipeForm from "./RecipeForm";

import "./NewRecipe.css";

const NewRecipe = (props) => {

  const saveRecipeDataHandler = (enteredRecipeData) => {
    const recipeData = {
      ...enteredRecipeData,
      id: Math.random().toString(),
    };
    console.log(recipeData);
  };

  return (
    <div className="new-recipe">
      <RecipeForm onSaveRecipeData={saveRecipeDataHandler} />
    </div>
  );
};

export default NewRecipe;

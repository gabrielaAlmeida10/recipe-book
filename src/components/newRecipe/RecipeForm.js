// RecipeForm.js
import React, { useState } from "react";

import "./recipeForm.css";

const RecipeForm = (props) => {
  const [name, setName] = useState("");
  const [tipo, setTipo] = useState("");
  //const [image, setImage] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [preparo, setPreparo] = useState([]);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const tipoChangeHandler = (event) => {
    setTipo(event.target.value);
  };

  const ingredientesChangeHandler = (event) => {
    setIngredientes(event.target.value);
  };

  const preparoChangeHandler = (event) => {
    setPreparo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const recipeData = {
      name: name,
      tipo: tipo,
      ingredientes: ingredientes,
      preparo: preparo,
    };

    props.onSaveRecipeData(recipeData);
    setName("");
    setTipo("");
    setIngredientes("");
    setPreparo("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-recipe__controls">
        <div className="new-recipe__control">
          <label>Name: </label>
          <input type="text" required value={name} onChange={nameChangeHandler} />
        </div>
        <div className="new-recipe__control">
          <label>Tipo:</label>
          <select required value={tipo} onChange={tipoChangeHandler}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="new-recipe__control">
          <label>Ingredientes: </label>
          <textarea
            id="recipe-ingredients"
            value={ingredientes}
            onChange={ingredientesChangeHandler}
            required
          ></textarea>
        </div>
        <div className="new-recipe__control">
          <label>Modo de Preparo: </label>
          <textarea
            id="recipe-preparo"
            value={preparo}
            onChange={preparoChangeHandler}
            required
          ></textarea>
        </div>
      </div>
      <div className="new-recipe__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add New Recipe</button>
      </div>
    </form>
  );
};

export default RecipeForm;

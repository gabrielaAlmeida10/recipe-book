import "./galleryFilter.css";
import React from "react";

const GalleryFilter = ({onFilterChange}) => { //destructuring the object, to extract a especific prop
    const typesOfRecipes = ["Todos", "Pães", "Bolos", "Kibes", "Canelones"];
    
    return (
        <div className="filter">
            <h3>Filtrar por Tipo: </h3>
            <ul>
                {typesOfRecipes.map((type, index) => (
                    <li key={index}>
                        <button onClick={() => onFilterChange(type)}>{type}</button>
                        <hr></hr>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default GalleryFilter;
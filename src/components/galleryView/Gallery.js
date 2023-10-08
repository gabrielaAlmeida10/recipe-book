import React, { useState } from "react";
import "./GalleryView.css";

import Pao from '../../images/pao.jpg';
import GalleryFilter from "./GalleryFilter";

// Dados de exemplo das receitas (você pode substituir isso por seus próprios dados)
const receitas = [
  {
    id: 1,
    type: "Pães",
    nome: "Pão",
    ingredientes: [
      "1 kg de farinha de trigo",
      "Sal",
      "1 xícara de óleo",
      "2 copos de leite morno",
      "1 colher (sopa) de fermento",
    ],
    recheio: "O que quiser",
    instrucoes: "Prepare a massa, recheie e asse",
    photo: Pao,
  },
  {
    id: 2,
    type: "Bolos",
    nome: "Bolo de Chocolate",
    ingredientes: ["Farinha", "Açúcar", "Chocolate em pó", "Ovos", "Leite"],
    instrucoes:
      "Misture os ingredientes, asse no forno e decore com chocolate derretido.",
    photo: "../../images/pao.jpg",
  },
  {
    id: 3,
    type: "Kibes",
    nome: "Kibe Recheado",
    ingredientes: ["Farinha", "Açúcar", "Chocolate em pó", "Ovos", "Leite"],
    instrucoes:
      "Misture os ingredientes, asse no forno e decore com chocolate derretido.",
    photo: "../../images/pao.jpg",
  },
  {
    id: 4,
    type: "Canelones",
    nome: "Canelone",
    ingredientes: ["Farinha", "Açúcar", "Chocolate em pó", "Ovos", "Leite"],
    instrucoes:
      "Misture os ingredientes, asse no forno e decore com chocolate derretido.",
    photo: "../../images/pao.jpg",
  },
];

const Gallery = () => {
  const [selectedRecipie, setSelectedRecipie] = useState(null);
  const [filter, setFilter] = useState("Todos");

  const mostrarDetalhes = (receita) => {
    setSelectedRecipie(receita);
  };

  const fecharDetalhes = () => {
    setSelectedRecipie(null);
  };

  const filtrarReceita = (type) => {
    setFilter(type);
  }

  const filteredRecipes = filter === "Todos" ? receitas : receitas.filter(receita => receita.type === filter);

  return (
    <div className="gallery-container">
      <GalleryFilter onFilterChange={filtrarReceita}/>
      <div className="gallery">
        {filteredRecipes.map((receita) => (
          <div
            key={receita.id}
            className="recipe"
            onClick={() => mostrarDetalhes(receita)}
          >
            <img src={receita.photo}  alt={`Foto de ${receita.nome}`} />
            <h3>{receita.nome}</h3>
          </div>
        ))}
      </div>
      {selectedRecipie && (
        <div className="details">
          <button onClick={fecharDetalhes}>X</button>
          <img src={selectedRecipie.photo} alt={`Foto de ${selectedRecipie.nome}`}/>
          <h2>{selectedRecipie.nome}</h2>
          <p>Ingredientes: {selectedRecipie.ingredientes.join(", ")}</p>
          <p>Recheio: {selectedRecipie.recheio}</p>
          <p>Instruções: {selectedRecipie.instrucoes}</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;

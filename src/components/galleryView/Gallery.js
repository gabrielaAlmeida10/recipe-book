import React, { useState } from "react";
import "./GalleryView.css";


// Dados de exemplo das receitas (você pode substituir isso por seus próprios dados)
const receitas = [
  {
    id: 1,
    nome: "Pão",
    ingredientes: [
      "Massa de lasanha",
      "Molho de tomate",
      "Queijo",
      "Carne moída",
    ],
    instrucoes: "Cozinhe a carne moída, monte as camadas e asse no forno.",
  },
  {
    id: 2,
    nome: "Bolo de Chocolate",
    ingredientes: ["Farinha", "Açúcar", "Chocolate em pó", "Ovos", "Leite"],
    instrucoes:
      "Misture os ingredientes, asse no forno e decore com chocolate derretido.",
  },
  {
    id: 3,
    nome: "Bolo de Chocolate",
    ingredientes: ["Farinha", "Açúcar", "Chocolate em pó", "Ovos", "Leite"],
    instrucoes:
      "Misture os ingredientes, asse no forno e decore com chocolate derretido.",
  },
  {
    id: 4,
    nome: "Bolo de Chocolate",
    ingredientes: ["Farinha", "Açúcar", "Chocolate em pó", "Ovos", "Leite"],
    instrucoes:
      "Misture os ingredientes, asse no forno e decore com chocolate derretido.",
  },
  {
    id: 5,
    nome: "Bolo de Chocolate",
    ingredientes: ["Farinha", "Açúcar", "Chocolate em pó", "Ovos", "Leite"],
    instrucoes:
      "Misture os ingredientes, asse no forno e decore com chocolate derretido.",
  },
  {
    id: 6,
    nome: "Bolo de Chocolate",
    ingredientes: ["Farinha", "Açúcar", "Chocolate em pó", "Ovos", "Leite"],
    instrucoes:
      "Misture os ingredientes, asse no forno e decore com chocolate derretido.",
  },
];

const Gallery = () => {
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

  const mostrarDetalhes = (receita) => {
    setReceitaSelecionada(receita);
  };

  const fecharDetalhes = () => {
    setReceitaSelecionada(null);
  };

  return (
    <div>
      <div className="gallery">
        {receitas.map((receita) => (
          <div
            key={receita.id}
            className="recipe"
            onClick={() => mostrarDetalhes(receita)}
          >
            <h3>{receita.nome}</h3>
          </div>
        ))}
      </div>
      {receitaSelecionada && (
        <div className="details">
          <button onClick={fecharDetalhes}>X</button>
          <h2>{receitaSelecionada.nome}</h2>
          <p>Ingredientes: {receitaSelecionada.ingredientes.join(", ")}</p>
          <p>Instruções: {receitaSelecionada.instrucoes}</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
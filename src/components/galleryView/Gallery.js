import React, { useState } from "react";
import "./GalleryView.css";

import Pao from '../../images/pao.jpg';

// Dados de exemplo das receitas (você pode substituir isso por seus próprios dados)
const receitas = [
  {
    id: 1,
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
    nome: "Bolo de Chocolate",
    ingredientes: ["Farinha", "Açúcar", "Chocolate em pó", "Ovos", "Leite"],
    instrucoes:
      "Misture os ingredientes, asse no forno e decore com chocolate derretido.",
    photo: "../../images/pao.jpg",
  },
  {
    id: 3,
    nome: "Kibe Recheado",
    ingredientes: ["Farinha", "Açúcar", "Chocolate em pó", "Ovos", "Leite"],
    instrucoes:
      "Misture os ingredientes, asse no forno e decore com chocolate derretido.",
    photo: "../../images/pao.jpg",
  },
  {
    id: 4,
    nome: "Canelone",
    ingredientes: ["Farinha", "Açúcar", "Chocolate em pó", "Ovos", "Leite"],
    instrucoes:
      "Misture os ingredientes, asse no forno e decore com chocolate derretido.",
    photo: "../../images/pao.jpg",
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
            <img src={receita.photo}  alt={`Foto de ${receita.nome}`} />
            <h3>{receita.nome}</h3>
          </div>
        ))}
      </div>
      {receitaSelecionada && (
        <div className="details">
          <button onClick={fecharDetalhes}>X</button>
          <img src={receitaSelecionada.photo} alt={`Foto de ${receitaSelecionada.nome}`}/>
          <h2>{receitaSelecionada.nome}</h2>
          <p>Ingredientes: {receitaSelecionada.ingredientes.join(", ")}</p>
          <p>Recheio: {receitaSelecionada.recheio}</p>
          <p>Instruções: {receitaSelecionada.instrucoes}</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;

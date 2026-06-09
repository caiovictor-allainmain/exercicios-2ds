import { useState } from "react";
import "./style.css";

export default function FormularioHeroi({ onCadastrar }) {
  const [nome, setNome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onCadastrar(nome); 

    setNome(""); // limpa o input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do herói"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}
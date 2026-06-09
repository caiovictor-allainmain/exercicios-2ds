import { useState, useCallback } from "react";
import FormularioHeroi from "./components/FormularioHeroi";
import ListaHerois from "./components/ListaHerois";
import "./App.css";

export default function App() {
  const [herois, setHerois] = useState([]);

  const adicionarHeroi = useCallback((nome) => {
    const nomeLimpo = nome.trim();
    if (!nomeLimpo) return;
    setHerois((prevHerois) => {
      if (prevHerois.includes(nomeLimpo)) return prevHerois;
      return [...prevHerois, nomeLimpo];
    });
  }, []);

  return (
    <main className="container">
      <h1>Cadastro de Heróis</h1>
      <FormularioHeroi onCadastrar={adicionarHeroi} />
      <ListaHerois herois={herois} />
    </main>
  );
}
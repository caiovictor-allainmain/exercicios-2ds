import Card from "./components/Card/Card"
import Formulario from "./components/FormularioMensagem/Formulario"
import avatar from "./assets/swordsman.png"

export default function App() {

  return(
    <>
   <Card className="card-personagem">
    <img src={avatar} alt="avatar" className="avatar" />
    <h1 className="NomeClasse">Guerreiro</h1>
   </Card>

   <Card className="card-status">
     <h1>Classe: Suporte</h1>
     <p>Nivel: 10</p>
     <p>Vida: 930 / 1000</p>
     <p>Experiência: 750 / 2500</p>
    </Card>

    <Card className="card-acoes">
     <button type="button">Atacar</button>
     <button type="button">Defender</button>
     <button type="button">Itens</button>
     <button type="button">Recuar</button>
   </Card>


     <Formulario />
    </>
  )
}
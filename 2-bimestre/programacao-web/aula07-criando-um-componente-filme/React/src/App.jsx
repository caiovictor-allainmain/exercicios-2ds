import Filme from "./components/Filme"

export default function App() {
  return (
    <div>
      <Filme nome="Matrix" ano={1999} descricao="Um hacker descobre a verdade sobre a realidade." />
      <Filme nome="Interestelar" ano={2014} descricao="Astronautas viajam pelo espaço em busca de um novo lar." />
      <Filme nome="Inception" ano={2010} descricao="Um ladrão invade os sonhos das pessoas." />
    </div>
  )
}
import Aluno from "./components/Aluno"

export default function App() {
  return (
    <div>
      <Aluno nome="João" curso="Desenvolvimento de Sistemas" />
      <Aluno nome="Mary" curso="Informática" />
      <Aluno nome="Pedro" curso="Engenharia da computação" />
    </div>
  )
}
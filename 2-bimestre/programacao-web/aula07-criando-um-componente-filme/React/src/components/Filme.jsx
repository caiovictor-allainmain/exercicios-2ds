export default function Filme({ nome = "Matrix", ano = 1999, descricao = "Um hacker descobre a verdade sobre a realidade." }) {
  return (
    <div>
      <h1>Nome do filme: {nome}</h1>
      <h2>Ano do filme: {ano}</h2>
      <p>{descricao}</p>
    </div>
  )
}
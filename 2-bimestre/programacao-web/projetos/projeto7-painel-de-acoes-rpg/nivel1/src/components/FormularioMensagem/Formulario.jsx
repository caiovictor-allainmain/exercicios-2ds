import { useState } from "react"
import './style.css'

export default function Formulario() {
  const [nome, setNome] = useState("")
  const [mensagem, setMensagem] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    alert(`Nome: ${nome}\nMensagem: ${mensagem}`)
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>

      <p className="formulario-titulo">Formulário de Mensagem</p>

      <div className="campo">
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Mensagem:</label>
        <textarea
          placeholder="Digite sua mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
      </div>

      <button className="btn-enviar" type="submit">Enviar Mensagem</button>

    </form>
  )
}
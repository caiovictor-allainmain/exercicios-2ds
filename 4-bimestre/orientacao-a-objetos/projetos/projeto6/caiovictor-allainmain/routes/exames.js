// routes/exames.js
const express = require("express")
const router = express.Router()

const exames = [
  { id: 1, nome: "Hemograma", area: "laboratorio", preco: 60, disponivel: true },
  { id: 2, nome: "Raio-X", area: "imagem", preco: 150, disponivel: true },
  { id: 3, nome: "Ressonancia", area: "imagem", preco: 800, disponivel: false }
]

router.get("/", (req, res) => {
  res.status(200).json(exames)
})

router.get("/disponiveis", (req, res) => {
  const disponiveis = exames.filter(exame => exame.disponivel === true)
  res.status(200).json(disponiveis)
})

router.get("/total", (req, res) => {
  res.status(200).json({ total: exames.length })
})

router.post("/", (req, res) => {
  res.status(201).json({ mensagem: "Cadastro de exame realizado" })
})

module.exports = router

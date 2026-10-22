// routes/pacientes.js
const express = require("express")
const router = express.Router()

const pacientes = [
  { id: 1, nome: "Ana", convenio: "plano-a" },
  { id: 2, nome: "Bruno", convenio: "particular" }
]

router.get("/", (req, res) => {
  res.status(200).json(pacientes)
})

router.get("/total", (req, res) => {
  res.status(200).json({ total: pacientes.length })
})

module.exports = router

// routes/index.js
const express = require("express")
const router = express.Router()

const rotasExames = require("./exames")
const rotasPacientes = require("./pacientes")

router.get("/", (req, res) => {
  res.status(200).json({ mensagem: "API de Clinica" })
})

router.use("/exames", rotasExames)
router.use("/pacientes", rotasPacientes)

module.exports = router

const express = require("express")
const app = express()
const trabalhosRouter = require("./routes/trabalhos")

app.use(express.json())

app.use("/trabalhos", trabalhosRouter)

app.use((req, res, next) => {
    const erro = new Error("Rota nao encontrada")
    erro.status = 404
    next(erro)
})

app.use((erro, req, res, next) => {
    const status = erro.status || 500
    res.status(status).json({ erro: erro.message })
})

module.exports = app
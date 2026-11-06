const express = require("express")
const router = express.Router()
const validarTrabalho = require("../middlewares/validarTrabalho")

let trabalhos = [
    { id: 1, cliente: "Ana", impresso: "Cartao de Visita", valor: 120, status: "entregue" },
    { id: 2, cliente: "Bruno", impresso: "Banner", valor: 200, status: "producao" },
    { id: 3, cliente: "Carla", impresso: "Adesivo", valor: 80, status: "producao" }
]

router.get("/", (req, res) => {
    const { status, valorMin } = req.query
    let resultado = [...trabalhos]

    if (status) {
        resultado = resultado.filter(t => t.status === status)
    }

    if (valorMin) {
        const min = Number(valorMin)
        if (!isNaN(min)) {
            resultado = resultado.filter(t => t.valor >= min)
        }
    }

    res.status(200).json(resultado)
})

router.get("/:id", (req, res, next) => {
    const idParam = Number(req.params.id)
    const trabalho = trabalhos.find(t => t.id === idParam)

    if (!trabalho) {
        const erro = new Error("Trabalho nao encontrado")
        erro.status = 404
        return next(erro)
    }

    res.status(200).json(trabalho)
})

router.post("/", validarTrabalho, (req, res) => {
    const { cliente, impresso, valor } = req.body

    const maiorId = trabalhos.length > 0 ? Math.max(...trabalhos.map(t => t.id)) : 0
    const novoId = maiorId + 1

    const novoTrabalho = {
        id: novoId,
        cliente,
        impresso,
        valor,
        status: "orcado"
    }

    trabalhos.push(novoTrabalho)

    res.status(201).json({ mensagem: "Registro de trabalho criado" })
})

module.exports = router
function validarTrabalho(req, res, next) {
    const { cliente, impresso, valor } = req.body

    if (cliente === undefined || cliente === null || cliente === "") {
        const erro = new Error("O campo cliente e obrigatorio")
        erro.status = 400
        return next(erro)
    }

    if (impresso === undefined || impresso === null || impresso === "") {
        const erro = new Error("O campo impresso e obrigatorio")
        erro.status = 400
        return next(erro)
    }

    if (typeof valor !== "number" || isNaN(valor)) {
        const erro = new Error("O campo valor deve ser um numero")
        erro.status = 400
        return next(erro)
    }

    if (valor <= 0) {
        const erro = new Error("O campo valor deve ser maior que zero")
        erro.status = 400
        return next(erro)
    }

    next()
}

module.exports = validarTrabalho
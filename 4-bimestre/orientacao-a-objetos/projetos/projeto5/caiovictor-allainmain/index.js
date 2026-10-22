const { carregarConfig } = require("./config")

function handler(req, res) {
    const config = carregarConfig()

    if (req.url === "/") {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        res.end(`Servidor de status: ${config.servico}`)
        return
    }

    if (req.url === "/vivo") {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        res.end("vivo")
        return
    }

    if (req.url === "/status") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        
        res.end(JSON.stringify({
            online: true,
            servico: config.servico,
            porta: config.porta,
            ambiente: config.ambiente
        }))
        return
    }

    res.statusCode = 404
    res.setHeader("Content-Type", "text/plain")
    res.end("Rota nao encontrada")
}

module.exports = handler

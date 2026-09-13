const Voucher = require("./Voucher")

function criar(tipo, cliente) {
  if (tipo === "hospedagem") {
    return new Voucher.Hospedagem(tipo, cliente)
  }

  if (tipo === "passeio") {
    return new Voucher.Passeio(tipo, cliente)
  }

  if (tipo === "transfer") {
    return new Voucher.Transfer(tipo, cliente)
  }

  throw new Error("Tipo de voucher inválido")
}

module.exports = {
  criar
}

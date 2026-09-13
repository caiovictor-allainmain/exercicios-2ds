class Voucher {
  constructor(tipo, cliente) {
    this.tipo = tipo
    this.cliente = cliente
  }

  emitir() {
    throw new Error("Método emitir() deve ser implementado")
  }
}

class Hospedagem extends Voucher {
  emitir() {
    return `Voucher de hospedagem emitido para: ${this.cliente}`
  }
}

class Passeio extends Voucher {
  emitir() {
    return `Voucher de passeio emitido para: ${this.cliente}`
  }
}

class Transfer extends Voucher {
  emitir() {
    return `Voucher de transfer emitido para: ${this.cliente}`
  }
}

module.exports = Voucher
module.exports.Hospedagem = Hospedagem
module.exports.Passeio = Passeio
module.exports.Transfer = Transfer

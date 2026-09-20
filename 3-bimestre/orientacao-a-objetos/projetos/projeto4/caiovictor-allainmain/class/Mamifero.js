const Animal = require("./Animal");

class Mamifero extends Animal {
  constructor(nome, idade) {
    super(nome, idade);
    this.registros = [];
  }

  descricao() {
    return "Mamífero em exibição no recinto";
  }

  adicionarRegistro(registro) {
    this.registros.push(registro);
  }
}

module.exports = Mamifero;

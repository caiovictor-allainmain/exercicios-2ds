const Mamifero = require("./Mamifero");
const Ave = require("./Ave");
const Reptil = require("./Reptil");

class AnimalFactory {
  static criar(tipo, nome, idade) {
    switch (tipo) {
      case "mamifero":
        return new Mamifero(nome, idade);

      case "ave":
        return new Ave(nome, idade);

      case "reptil":
        return new Reptil(nome, idade);

      default:
        throw new Error("Tipo de animal inválido");
    }
  }
}

module.exports = AnimalFactory;

const Animal = require("./Animal");

class Reptil extends Animal {
  descricao() {
    return "Réptil em exibição no recinto";
  }
}

module.exports = Reptil;

const Animal = require("./Animal");

class Ave extends Animal {
  descricao() {
    return "Ave em exibição no recinto";
  }
}

module.exports = Ave;

class Animal {
  #nome;
  #idade;

  constructor(nome, idade) {
    this.#nome = nome;
    this.#idade = idade;
  }

  get nome() {
    return this.#nome;
  }

  get idade() {
    return this.#idade;
  }

  descricao() {
    return "Animal cadastrado no zoológico";
  }
}

module.exports = Animal;

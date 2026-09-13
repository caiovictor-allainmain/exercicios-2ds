class Funcionario{
    #salario
    static #quantidade = 0
    constructor(nome,cargo,salario){
    this.nome = nome
    this.cargo = cargo
    this.#salario = salario
    Funcionario.#quantidade++
    }

    get salario(){
        return this.#salario
    }
    static get quantidade(){
        return this.#quantidade
    }
    static quantidadeFuncionarios(){
        return Funcionario.#quantidade
    }
    apresentar(){
        return `${this.nome} - ${this.cargo}`
    }
    set salario(salarioNovo){
        if(salarioNovo >= 0){
            this.#salario = salarioNovo
        }
    }
}
const funcionario1 = new Funcionario("Ana", "Desenvolvedora", 5000)
const funcionario2 = new Funcionario("Carlos", "Analista", 3000)
const funcionario3 = new Funcionario("Maria", "Gerente", 2000)

module.exports = Funcionario
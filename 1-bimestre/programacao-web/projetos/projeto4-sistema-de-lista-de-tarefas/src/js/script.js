const input = document.getElementById("tarefa")
const botao = document.getElementById("adicionar")
const lista = document.getElementById("lista")
const aviso = document.getElementById("aviso")

botao.addEventListener("click", function () {

    const texto = input.value.trim()

    if (texto === "") {
        aviso.textContent = "Digite uma tarefa!"
        return
    }

    const li = document.createElement("li")

    const span = document.createElement("span")
    span.textContent = texto

    span.addEventListener("click", function () {
        span.classList.toggle("concluida")
    })

    const botaoRemover = document.createElement("button")
    botaoRemover.textContent = "Remover"

    botaoRemover.addEventListener("click", function () {
        li.remove()
    })

    li.appendChild(span)
    li.appendChild(botaoRemover)
    lista.appendChild(li)

    input.value = ""
    aviso.textContent = ""
})
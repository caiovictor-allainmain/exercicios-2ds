const form = document.getElementById("formulario")
const nome = document.getElementById("nome")
const idade = document.getElementById("idade")
const p = document.getElementById("resultado")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    p.textContent = `Olá ${nome.value}, você tem ${idade.value} anos`
})
const fs = require("fs/promises")

function obterCaminhoArquivo() {
  return process.env.ARQUIVO_VISITAS || "visitas.json"
}

async function gravarArquivo(lista) {
  const caminho = obterCaminhoArquivo()
  const conteudo = JSON.stringify(lista, null, 2)
  await fs.writeFile(caminho, conteudo, "utf-8")
}

async function listar() {
  const caminho = obterCaminhoArquivo()
  try {
    const conteudo = await fs.readFile(caminho, "utf-8")
    return JSON.parse(conteudo)
  } catch (erro) {
    if (erro.code === "ENOENT") {
      return []
    }
    throw erro
  }
}

async function salvar(visita) {
  const lista = await listar()
  lista.push(visita)
  await gravarArquivo(lista)
  return visita
}

async function atualizar(id, dados) {
  const lista = await listar()
  const indice = lista.findIndex((item) => item.id === id)

  if (indice === -1) {
    return null
  }

  const registroAtualizado = {
    ...lista[indice],
    ...dados,
    id: lista[indice].id
  }

  lista[indice] = registroAtualizado
  await gravarArquivo(lista)

  return registroAtualizado
}

async function remover(id) {
  const lista = await listar()
  const novaLista = lista.filter((item) => item.id !== id)

  if (novaLista.length === lista.length) {
    return false
  }

  await gravarArquivo(novaLista)
  return true
}

module.exports = { listar, salvar, atualizar, remover }
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value.trim();
  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  amigos.push(nome);
  console.log(amigos);

  input.value = "";
}

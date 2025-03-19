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
  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let amigo of amigos) {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia! Adicione pelo menos um nome.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  document.getElementById(
    "resultado"
  ).innerHTML = `🎉 Amigo sorteado: ${amigoSorteado}`;
}

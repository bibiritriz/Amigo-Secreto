let amigos = [];

const amigo = document.getElementById("amigo");
const resultado = document.getElementById("resultado");
const listaAmigos = document.getElementById("listaAmigos");

function adicionarAmigo(){
  const novoAmigo = amigo.value.trim();
  if (novoAmigo === '') return window.alert('Por favor, insira um nome.');
  amigo.value = '';
  amigos.push(novoAmigo);
  aparecerLista(amigos);
}

function aparecerLista(amigos){
  listaAmigos.innerHTML = '';
  for(const amigo of amigos){
    listaAmigos.innerHTML += `<li>${amigo}</li>`;
  }
}

function sortearAmigo(){
  if (amigos.length === 0) return window.alert('A lista está vazia! Adicione nomes antes de sortear.');
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  resultado.innerHTML = `<p>O amigo sorteado é: ${amigoSorteado}</p>`;
}
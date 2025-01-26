let amigos = [];

const amigo = document.getElementById("amigo");
const resultado = document.getElementById("resultado");
const listaAmigos = document.getElementById("listaAmigos");

function adicionarAmigo(){
  const novoAmigo = amigo.value.trim();
  if(novoAmigo === ''){
    resultado.innerHTML = '<p class="error">Por favor, insira um nome.</p>';
  }else{
    resultado.innerHTML = '';
    amigo.value = '';
    amigos.push(novoAmigo);
    aparecerLista(amigos);
  }
}

function aparecerLista(amigos){
  listaAmigos.innerHTML = '';
  for(const amigo of amigos){
    listaAmigos.innerHTML += `<li>${amigo}</li>`;
  }
}

function sortearAmigo(amigos){
  if(amigos.length === 0){
    resultado.innerHTML = '<p class="error">A lista está vazia!</p>';
  }else{
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `<p>O amigo sorteado é: ${amigoSorteado}</p>`;
  }
}
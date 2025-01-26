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
    parecerLista(amigos);
  }
}

function parecerLista(amigos){
  listaAmigos.innerHTML = '';
  console.log(quantidade);
  for(const amigo of amigos){
    listaAmigos.innerHTML += `<li>${amigo}</li>`;
  }
}
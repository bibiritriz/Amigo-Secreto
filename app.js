let amigos = [];

function adicionarAmigo(){
  const amigo = document.getElementById("amigo").value.trim();
  if(amigo === ''){
    resultado.innerHTML = '<p class="error">Por favor, insira um nome.</p>';
  }else{
    amigos.push(amigo);
    resultado.innerHTML = '';
  }
}
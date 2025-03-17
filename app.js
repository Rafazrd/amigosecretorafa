//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Matriz para armazenar nomes de amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nomesAmigos = inputAmigo.value.trim();

  // Validar que o campo não está vazio
  if (nomesAmigos === "") {
    alert("Por favor, inserir um nome.");
    return; // Interromper a execução da função
  }

  // Validar que o nome não está duplicado
  if (amigos.includes(nomesAmigos)) {
    alert(`${nomesAmigos} já está na lista`);
    return;
  }

  // Adicionar o nome ao matriz de amigos
  amigos.push(nomesAmigos);

  // Limpar o campo de entrada
  inputAmigo.value = "";

  // Atualizar a lista em HTML
  atualizarLista();
}

// Função para atualizar a listade amigos na interface
function atualizarLista() {
  const listaAmigos = document.getElementById('listaAmigos');

  // Limpar o conteudo atual da lista
  listaAmigos.innerHTML = ""; // excluir qualquer conteúdo anterior dentro do conteúdo da lista

  // Percorrer a matriz com um loop for
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

// Função para selecionar um amigo aleatorio
function sortearAmigo() {
  // Validar que tenha amigos disponíveis
  if (amigos.length === 0) { // Verificar se a matriz 'amigos' esta vazia.
    alert("Não há amigos disponíveis para sortear. Adicione ao menos um.");
    return;
  }

  // Gerar um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um número aleatório entre 0 e o comprimento da matriz menor

  // Obter o nome sorteado
  const amigoSorteado = amigos[indiceAleatorio]; // Usar um indice aleatório para obter um nome da matriz.

  // Mostrar o resultado em um HTML
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `Amigo sorteado <strong>${amigoSorteado}</strong>`;
}
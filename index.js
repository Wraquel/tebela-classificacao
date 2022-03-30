var jogadores = [];
var pontosVitoria = 3;
var pontosDerrota = -1;

function adicionarJogador() {
  var nomeNovoJogador = document.getElementById("input").value;
  if (nomeNovoJogador == "") {
    alert("Escreva um nome válido");
  } else {
    var novoJogador = {
      nome: nomeNovoJogador,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0,
    };
    jogadores.push(novoJogador);
    console.log(jogadores);
    document.getElementById("input").value = "";
    exibeJogadoresNaTela(jogadores);
  }
}

function calcularPontos(jogador) {
  var pontos =
    jogador.vitorias * pontosVitoria + jogador.derrotas * pontosDerrota;
  return pontos;
}
function exibeJogadoresNaTela(jogadores) {
  var contentHTML = "";
  for (var i = 0; i < jogadores.length; i++) {
    contentHTML += `<tr>
   <td>${jogadores[i].nome}</td>
   <td>${jogadores[i].vitorias}</td>
   <td>${jogadores[i].empates}</td>
   <td>${jogadores[i].derrotas}</td>
   <td>${jogadores[i].pontos}</td>
   <td><button onClick='adicionarVitoria(${i})'>Vitória</button></td>
   <td><button onClick='adicionarEmpate(${i})'>Empate</button></td>
   <td><button onClick='adicionarDerrota(${i})'>Derrota</button></td>
   </tr>`;
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = contentHTML;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  if (jogadores.length < 2) {
    alert("Adicione mais um jogador");
  } else {
    var jogador = jogadores[i];
    jogador.vitorias++;
  }
  jogador.pontos = calcularPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  if (jogadores.length < 2) {
    alert("Número insuficiente de jogadores!");
  } else {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calcularPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calcularPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function reiniciarTabela() {
  jogadores.length = 0;
  exibeJogadoresNaTela(jogadores);
  document.getElementById("input").value = "";
}

function zerarPontuação(i) {
  for (i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].empates = 0;
    jogadores[i].pontos = 0;
  }
  document.getElementById("input").value = "";
  exibeJogadoresNaTela(jogadores);
}

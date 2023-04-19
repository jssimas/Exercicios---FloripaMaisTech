const enviar = document.getElementById("enviaForm");

function enviarFormulario(){
    event.preventDefault();
    alert("Formulario enviado com sucesso! Obrigado por se cadastrar! ");
    
};

function solicitarNome() {
    var nome = prompt("Por favor, informe o seu nome:", "");
    if (nome != null && nome != "") {
      alert("Bem-vindo, " + nome + "!");
      pedirInformacoes()
      pedirNomeSobrenome()
    }
  }

function confirmarAcao() {
  if (confirm("Tem certeza de que deseja avaliar a página?")) {
    alert("Obrigado por confirmar!");
  } else {
    alert("Fica para próxima, obrigado!");
  }
}

function pedirInformacoes() {
    var nome = "";
    var cidade = "";
    nome = window.prompt("Qual o seu nome?");
    cidade = window.prompt("Qual a sua cidade?");
    var idade = parseInt(prompt("Digite sua idade."));
    console.log(nome, cidade, idade);
}


function pedirNomeSobrenome() {
    var nome = "";
    var sobrenome = "";
    nome = window.prompt("Qual o seu nome?");
    sobrenome = window.prompt("Qual o seu sobrenome?");
    alert("Bem-vindo, " + nome + ' ' + sobrenome + "!");
}


// Chat bot - atendimento de saúde
// Vítor Vieira de Souza, ADS040-1T

let resp0 = prompt("Qual é seu nome?");
alert(`Seja bem-vindo(a) ao sistema VIEIRA's SAÚDE ${resp0}`);

let resp1 = prompt(
  "Qual serviço desejas escolher? 1 Emergência; 2 Marcar consultas; 3 Ver Resultados"
);

switch (parseInt(resp1)) {
  case 1:
    let resp1EM = prompt(
      "Qual especialidade desejas? Escolher entre: 1 - Infectologista; 2 - Ortopedista; 3 - Otorrino; 4 - Psiquiatra."
    );
    switch (parseInt(resp1EM)) {
      case 1:
      case 2:
      case 3:
      case 4:
        alert(
          "Sua localização atual será utilizada para encontrar o hospital mais próximo..."
        );
        console.log(
          "Sua localização atual será utilizada para encontrar o hospital mais próximo..."
        );
        break;

      default:
        alert("Resposta inválida. Escreva numéricamente 1, 2, 3 ou 4");
        console.log("Resposta inválida. Escreva numéricamente 1, 2, 3 ou 4");
    }
    break;
  case 2:
    let resp1MC = prompt(
      "Qual a data de preferência da consulta? Insira no formato DD/MM/AAAA"
    );
    if(resp1MC) {
    (/^\d{2}\/\d{2}\/\d{4}$/.test(resp1MC));
        alert(`Data Válida: ${resp1MC}`);
        alert(
          "Sua localização atual será utilizada para encontrar o hospital / clínica mais próximo(a)..."
        );
        console.log(`Data Válida: ${resp1MC}`);
        console.log(
          "Sua localização atual será utilizada para encontrar o hospital / clínica mais próximo(a)..."
        );
      } else{
        alert("data invalida, por favor insira no formato (DD/MM/AAAA)");
        console.log("data invalida, por favor insira no formato (DD/MM/AAAA)");
      }

    break;
  case 3:
    let resp1VR = prompt(
      "Qual seu CPF? Queremos verificar sua identidade. *somente números*"
    );
    let resp1VRInt = parseInt(resp1VR);
    switch (resp1VRInt) {
      case (isNaN(resp1VR) & (resp1VR !== resp1VRInt)):
        alert("ERRO: Digite um CPF válido!");
        console.log("ERRO: Digite um CPF válido!");
        break;

      default:
        alert("CPF validado!");
        console.log("CPF validado!");
        alert("Estes são os resultados dos seus exames:");
        console.log("Estes são os resultados dos seus exames:");
    }
    break;
  default:
    alert(
      "Informação inválida, digite apenas um dos seguintes números: 1,2 ou 3."
    );
    console.log(
      "Informação inválida, digite apenas um dos seguintes números: 1,2 ou 3."
    );
}
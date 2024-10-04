let resp0 = prompt("Qual é seu nome?");
alert("Seja bem-vindo(a) ao sistema VIEIRA_SAUDE " + resp0 + "!");

let resp1 = prompt(
  "Qual serviço desejas escolher? 1 Emergência; 2 Marcar consultas; 3 Ver Resultados"
);
let resp1Int = parseInt(resp1);

// perguntar a especialidade ao "user" pretende escolher

if (resp1Int === 1) {
  let resp1EM = prompt(
    "Qual especialidade desejas? Escolher entre: 1 - Infectologista; 2 - Ortopedista; 3 - Otorrino; 4 - Psiquiatra."
  );
  if (resp1EM == 1) {
    alert(
      "Sua localização atual será utilizada para encontrar o hospital mais próximo..."
    );
  } else if (resp1EM == 2) {
    alert(
      "Sua localização atual será utilizada para encontrar o hospital mais próximo..."
    );
  } else if (resp1EM == 3) {
    alert(
      "Sua localização atual será utilizada para encontrar o hospital mais próximo..."
    );
  } else if (resp1EM == 4) {
    alert(
      "Sua localização atual será utilizada para encontrar o hospital mais próximo..."
    );
  } else {
    alert("Resposta inválida. Escreva numéricamente 1, 2, 3 ou 4");
  }
} else if (resp1Int === 2) {
  // perguntar a data de preferência; perguntar a especialidade ao "user" pretende escolher.
  let resp1MC = prompt(
    "Qual a data de preferência da consulta? Insira no formato " + "DD/MM/AAAA"
  );
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(resp1MC)) {
    alert("Data Válida: " + resp1MC);
    alert(
      "Sua localização atual será utilizada para encontrar o hospital / clínica mais próximo(a)..."
    );
  } else {
    alert("data invalida, por favor insira no formato (DD/MM/AAAA)");
  }
} else if (resp1Int === 3) {
  let resp1VR = prompt(
    "Qual seu CPF? Queremos verificar sua identidade. *somente números*"
  );
  let resp1VRInt = parseInt(resp1VR);
  if (isNaN(resp1VR) & (resp1VR !== resp1VRInt)) {
    alert("ERRO: Digite um CPF válido!");
  } else {
    alert("CPF validado!");
  }
  alert("Estes são os resultados dos seus exames:");
  // Perguntar o CPF para confirmar a identidade
  // alert('Estes são os resultados dos seus exames:')
} else {
  alert("Resposta inválida. Escreva numéricamente" + " 1, 2 ou 3");
}
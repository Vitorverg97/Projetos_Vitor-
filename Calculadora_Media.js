function reqName() {
  const regex = /^[A-Za-z\s]+$/; // Aceita letras sem acentos e espaços.
  let userName;
  do {
    userName = prompt("Qual é seu nome?  *Sem acento");
    
    // Verifica se o valor é null ou uma string () após remover espaços em branco
    if (userName === null || userName.trim() === "") {
      alert("Por favor, insira um nome válido.");
      continue; // Reinicia o loop
    }

    // Verifica se o nome contém apenas letras e espaços
    if (!regex.test(userName)) {
      alert("Por favor, insira apenas letras.");
    }
  } while (
    userName === null ||
    userName.trim() === "" ||
    !regex.test(userName)
  ); // Condição do loop

  return userName;
}

let userName = reqName();
alert(`Olá ${userName}, seja bem-vindo(a) à calculadora de média!`);

let r1, r2, r3;
// Função para solicitar e validar se a nota está entre 0 e 10
function reqRate(message) {
  let rate;
  while (true) {
    rate = parseFloat(prompt(message));
    // Verifica se o valor é um número e se está entre 0 e 10
    if (!isNaN(rate) && rate >= 0 && rate <= 10) {
      return rate;  // Retorna a nota válida
    } else {
      alert("Por favor, insira um valor válido entre 0 e 10.");
    }
  }
}
// Usando a função para solicitar as três notas
r1 = reqRate("Insira a primeira nota: *Números de 0 a 10");
r2 = reqRate("Insira a segunda nota: *Números de 0 a 10");
r3 = reqRate("Insira a terceira nota: *Números de 0 a 10");

alert("Sua média será calculada... Aperte ok para continuar.");
console.log("Sua média será calculada... Aperte ok para continuar.");

function treatedRates(r1, r2, r3) {
  let avg = (r1 + r2 + r3) / 3;
  return avg >= 7
    ? `Aprovado(a), com média ${avg.toFixed(1)} de aproveitamento.`
    : `Reprovado(a), com média ${avg.toFixed(1)} de aproveitamento.`;
}
alert(`${userName}, você foi ${treatedRates(r1, r2, r3)}`);
console.log(`${userName}, você foi ${treatedRates(r1, r2, r3)}`);

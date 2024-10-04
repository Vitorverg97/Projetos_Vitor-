// chat bot - atendimento de saude
// Vítor Vieira de Souza, ADS040-1T

function solicitarNome() {
    let nome = prompt("Oi, qual é o seu nome?");
    
    // Verifica se o nome é uma string e não está vazio
    while (typeof nome !== 'string' || nome.trim() === "") {
      nome = prompt("Por favor, insira um nome válido:");
    }
    
    return nome;
    
  }
  let nome = solicitarNome();
  console.log("Seja bem-vindo(a) ao sistema VIEIRA_SAÚDE de atendimento, " + nome);

const decisao0 = prompt("Qual serviço desejas realizar? 1 Emergência; 2 Marcar consultas; 3 Marcar exames; 4 Ver resultados.");

function getResponse(decisao0) {
  if (decisao0.includes("1")) {
    return 'Escolha a especialidade: 1 Clínico geral; 2 Oncologista; 3 Cardiologista; 4 Endocrinologista; 5 Gastroenterologista; 6 Nefrologista';
  } else if (decisao0.includes("2")) {
    return 'Escolha a especialidade: 1 Clínico geral; 2 Oncologista; 3 Cardiologista; 4 Endocrinologista; 5 Gastroenterologista; 6 Nefrologista';
  } else if (decisao0.includes("3")) {
    return 'Hemograma completo; Biópsia(Especificar); Eletrocardiograma (ECG); Exame de glicemia em jejum; Endoscopia digestiva alta; Exame de creatinina no sangue'
  } else 
  return 'Digite seu CPF para visualizar seus resultados'
};
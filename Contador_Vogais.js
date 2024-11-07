function contagem(frase) {
    const vogais = "ÃãaeiouAEIOU"; // Define as vogais em uma string
    let contador = 0; // Inicializa um contador
    const vogaisEncontradas = new Set(); // Usando um Set para armazenar vogais únicas

    // Loop através de cada letra da frase
    for (let letra of frase) {
        // Verifica se a letra é uma vogal
        if (vogais.includes(letra)) {
            contador++; // Incrementa o contador se for uma vogal
            vogaisEncontradas.add(letra); // Adiciona a vogal ao Set
        }
    }
    
    console.log(`Vogais encontradas: ${[...vogaisEncontradas].join(", ")}`); // Exibe as vogais encontradas
    return contador; // Retorna o total de vogais encontradas
}

console.log(contagem.sort("Como contar vogais de uma oração?")); // Saída: 14
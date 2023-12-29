Cypress.Commands.add('gerarNomeAleatorio', () => {
    cy.readFile('cypress/fixtures/endPointCadastroPet/requests/listaDeNomes.json').then((jsonNomes) => {
        const listaNomes = jsonNomes.nomesPet; //Armazenando a lista de nomes do json dentro de uma variavel constante 
        const posicaoNomeComPonto = Math.random() * listaNomes.length;  // Math.random() = gera um numero aleatorio com virgula de 0 a 1 (0,6456)
        const posicaoNomeSemPonto = Math.floor(posicaoNomeComPonto);  // Math.floor() = Transforma numeros com virgula em numeros inteiros(1,00 = 1) 
    
        return listaNomes[posicaoNomeSemPonto]; // retorna um nome da listanomes comforme numero aleatorio 

    })  
})

Cypress.Commands.add('gerarIdAleatorio', () => {    
    const iD = Math.random() * 1000; 

    return Math.floor(iD);
})
    

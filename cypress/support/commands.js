Cypress.Commands.add('gerarNomeAleatorio', () => {
    const listaNomes = require('../fixtures/endPointCadastroPet/requests/listaDeNomes.json').nomesPet;  // require() = Realiza a leitura de um arquivo(txt.json)
    const posicaoNomeComPonto = Math.random() * listaNomes.length;  // Math.random() = gera um numero aleatorio com virgula de 0 a 1 (0,6456)
    const posicaoNomeSemPonto = Math.floor(posicaoNomeComPonto);  // Math.floor() = Transforma numeros com virgula em numeros inteiros(1,00 = 1) 

    return listaNomes[posicaoNomeSemPonto];
})

Cypress.Commands.add('gerarIdAleatorio', () => {    
    const iD = Math.random() * 1000; 

    return Math.floor(iD);
})
    

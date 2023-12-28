import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RestRequests from "../../support/RestRequests.js" // importando a classe do caminho do arquivo passado

const restRequests = new RestRequests(); // instanciando a classe dentro de uma variavel constante
const urlCadastroPet = "https://petstore.swagger.io/v2/pet";

Given("que estou cadastrando um pet no sistema", function () {

    cy.gerarNomeAleatorio().then(nome => { 
        cy.gerarIdAleatorio(nome).then(iD => {

            
            const jsonDaRequestPet = {
                "id": iD,
                "name": nome,
                "status": "pet disponivel para adoção"
            } 

            cy.writeFile('cypress/fixtures/endPointCadastroPet/requests/jsonRequestPet.json', jsonDaRequestPet)
        });  
    });
});

When("realizar a chamada do servico de cadastro com os dados de entrada preenchido", function () {
    const requestJsonCriarPet = require('../../fixtures/endPointCadastroPet/requests/jsonRequestPet.json')
    const jsonEmFormatoString = JSON.stringify(requestJsonCriarPet);
    

    restRequests.requisicaoPostComJson(jsonEmFormatoString, urlCadastroPet);

       

}) 
class RestRequests {  // aqui é feita a criação de uma classe
 
    requisicaoPostComJson(jsonBody, url) { //Criação de um metodo realizando uma requisição do tipo Post passando um json 
        response = cy.request({
            method: 'POST', // Tipo de metodo a ser utilizado na requisição. Pode ser do tipo "POST", "GET", "PUT" etc...
            headers: { //  dados passado para a api
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: jsonBody, //conteudo a ser passado no corpo da api  
            url: url, // caminho a ser feito no request
            failOnStatusCode: false // Serve para o teste dar continuidade mesmo se o status code for diferente 200 ou 201   
        });
        return response;
    } // final do metodo fazerRequisicaoPostComJson

    requisicaoGetAtributoUrl(id, url) {
        response = cy.request({ 
            method: 'GET', // Tipo de metodo a ser utilizado na requisição. Pode ser do tipo "POST", "GET", "PUT" etc...
            url: url + '/' id, // caminho a ser feito no request
            failOnStatusCode: false // Serve para o teste dar continuidade mesmo se o status code for diferente 200 ou 201
        });
        return response;
    } // final do metodo fazerRequisicaoPostComJson
} 
export default RestRequests //Comando necessario para a visualização das classes 
Feature: Cadastro de pet

    #Scenario Outline: Cadastro de usuario com sucesso 
    #Given que criamos um novo usuario
    #When realizamos a chamada do servico de cadastro com um usuario criado
    #And retornar o status 201 
    #Then deve retornar no response os dados do contrato 

   Scenario Outline: Cadastro de um pet com sucesso 
   Given que estou cadastrando um pet no sistema 
   When realizar a chamada do servico de cadastro com os dados de entrada preenchido
   Then o response 'endPointCadastroPet/responses/responseJsonCriarPet.json' deve conter o status code 200
   And o response 'endPointCadastroPet/responses/responseJsonCriarPet.json' deve conter a mensagem '"statusText":"OK"'

    Scenario Outline: Cadastro de pet com id invalido  
    Given que estou cadastrando um pet no sistema com o id invalido  
    When realizar a chamada do servico de cadastro com os dados de entrada preenchido
    Then o response 'endPointCadastroPet/responses/responseJsonCriarPet.json' deve conter o status code 500
    And o response 'endPointCadastroPet/responses/responseJsonCriarPet.json' deve conter a mensagem 'something bad happened'
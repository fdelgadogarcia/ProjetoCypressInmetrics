Feature: Cadastro de pet

    #Scenario Outline: Cadastro de usuario com sucesso 
    #Given que criamos um novo usuario
    #When realizamos a chamada do servico de cadastro com um usuario criado
    #And retornar o status 201 
    #Then deve retornar no response os dados do contrato 

   Scenario Outline: Cadastro de um pet com sucesso 
   Given que estou cadastrando um pet no sistema 
   When  realizar a chamada do servico de cadastro com os dados de entrada preenchido
    #And   retornar o status 200
    #Then devera retornar no response os dados cadastrado com sucesso

    #Scenario Outline: Cadastro de pet com id invalido  
    #Given que stou cadastrando um pet no siatema 
    #When  realizar a chamada do servico de cadastro com Id invalido
    #Then  devera retornar no response os Status de erro 400
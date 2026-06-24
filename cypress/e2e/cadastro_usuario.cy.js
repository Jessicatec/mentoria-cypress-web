///<reference types="cypress" />
import { faker } from '@faker-js/faker';
import { CadastrarUsuario } from '../support/pages/cadastro_usuario_page';

describe('Cadastro de Usuário', () => {

  it('Cadastro de usuario realizado com sucesso', () => {
   acessarCadastro()
   preencherNome('jessica')
   preencherEmail('jessi@email.com')
   preencherSenha('123456')
   Cadastrar()

   //CadastrarUsuario('jessica', 'jessi@email.com','123456')

  })

  
  it('Cadastro com email invalido', () => {
   acessarCadastro()
   preencherNome('jessica')
   preencherEmail('skudhaas12321')
   preencherSenha('123456')
   Cadastrar()

   //CadastrarUsuario('jessica', 'jessi@email.com','123456')

  })
})

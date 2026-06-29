
///<reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Checkout', () => {

  it('Checkout realizado com sucesso', () => {
     cy.visit('login')
   cy.get('#user').type('email')
   cy.get('#password').type('senha')
   cy.get('#btnlogin').click();
     .should(have.text, 'Login realizado!')
     .should("be.visible")


    cy.login("jessi@qazando.com", "112026");
  })
})


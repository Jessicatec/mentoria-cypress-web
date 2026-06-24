
///<reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Checkout', () => {

  it('Checkout realizado com sucesso', () => {
    cy.login("jessi@qazando.com", "112026");
  })
})


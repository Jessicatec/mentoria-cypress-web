import { faker } from '@faker-js/faker';

// Comandos customizados do Cypress podem ser adicionados aqui.

Cypress.Commands.add('acessarLogin', (email) => {
    cy.visit("/login").type('email()');

 });


Cypress.Commands.add('preencherEmail', (email) => {
    cy.get('#user').type('email()');

 });

 Cypress.Commands.add('preencherSenha', (senha) => {
    cy.get('#password').type('senha()');

 });

 Cypress.Commands.add('clicarLogin', () => {
    cy.get('#btnLogin').click();

 });


Cypress.Commands.add('Login', (email, senha) => {
    cy.visit("/login").type('email()')
    cy.get('#user').type('email()')
    cy.get('#password').type('senha()')
    cy.get('#btnLogin').click();
    cy.get('#swal2-title')
      .should('have.text', 'Login realizado!')
      .should('be.visible');

 });


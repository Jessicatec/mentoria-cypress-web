// Arquivo: login.cy.js
// Testes de Login com padrão BDD (Behavior-Driven Development) em Gherkin
// URL: https://automationpratice.com.br/login

///<reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Login', () => {
  beforeEach('Dado que estou na página de login', () => {
    cy.visit('/login');
  });

  it('Login com sucesso', () => {
    // Quando eu preencho o email com "usuario@email.com"
    //cy.get('#user').type('teste@teste.com');
    cy.preencheremail();

    // E eu preencho a senha com "Senha@123"
    cy.get('#password').type('123456');

    // E eu clico no botão de login
    cy.get('#btnLogin').click();

    // E eu devo ver a mensagem "Login realizado"
    cy.get('#swal2-title')
      .should('have.text', 'Login realizado!')
      .should('be.visible');
  });
});

  describe('Cenário: Login com email vazio', () => {
    it('Quando deixo o email vazio e preencho a senha', () => {
      // Quando eu deixo o email vazio
      cy.get('#user').should('have.value', '');

      // E eu preencho a senha com "Senha@123"
      cy.get('#password').type('Senha@123');

      // E eu clico no botão de login
      cy.get('#btnLogin').click();

      // Então eu devo ver a mensagem de erro "Email é obrigatório"
      cy.contains('Email é obrigatório').should('be.visible');
    });
  });

  describe('Cenário: Login com senha vazia', () => {
    it('Quando preencho o email mas deixo a senha vazia', () => {
      // Quando eu preencho o email com "usuario@email.com"
      cy.get('#user').type('teste@teste.com');

      // E eu deixo a senha vazia
      cy.get('#password').should('have.value', '');

      // E eu clico no botão de login
      cy.get('#btnLogin').click();

      // Então eu devo ver uma mensagem de erro
      cy.contains('Senha é obrigatória').should('be.visible');
    });
  });

  describe('Cenário: Login com email inválido', () => {
    it('Quando preencho um email inválido', () => {
      // Quando eu preencho o email com "email_invalido"
      //cy.get('#user').type('email_invalido');
      cy.preencheremail(faker.internet.email(6));

      // E eu preencho a senha com "Senha@123"
      cy.get('#password').type('Senha@123');

      // E eu clico no botão de login
      //cy.get('#btnLogin').click();
        cy.clicarLogin();
      

        // Então eu devo ver a mensagem "Email inválido"
      cy.contains('Email inválido').should('be.visible');
    });
  });

  describe('Cenário: Login com senha inválida', () => {
    it('Quando preencho a senha incorreta', () => {
      // Quando eu preencho o email com "usuario@email.com"
      cy.get('#user').type('teste@teste.com');

      // E eu preencho a senha com "SenhaErrada"
      cy.get('#password').type('SenhaErrada');

      // E eu clico no botão de login
      //cy.get('#btnLogin').click();
        cy.clicarLogin();

        
      // Então eu devo ver a mensagem "Email ou senha inválidos"
      cy.contains('Email ou senha inválidos').should('be.visible');
    });
  });

  describe('Cenário: Recuperar senha', () => {
    it('Quando clico em Esqueci minha senha', () => {
      // Quando eu clico em "Esqueci minha senha"
      cy.contains('Esqueci minha senha').click();

      // Então eu devo ser redirecionado para a página de recuperação de senha
      cy.url().should('include', '/recuperar-senha');

      // E eu devo ver o texto "Digite seu email para recuperar a senha"
      cy.contains('Digite seu email para recuperar a senha').should('be.visible');
    });
  });

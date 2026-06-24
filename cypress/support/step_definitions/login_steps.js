import { Given, When, Then } from '@cucumber/cucumber';

const BASE_URL = 'https://automationpratice.com.br/login';

// Contexto
Given('que estou na página de login', () => {
  cy.visit(BASE_URL);
});

// Passos comuns - Preenchimento de campos
When('eu preencho o email com {string}', (email) => {
  cy.get('input[name="email"]').type(email);
});

When('eu preencho a senha com {string}', (senha) => {
  cy.get('input[name="password"]').type(senha);
});

When('eu deixo o email vazio', () => {
  // Campo já está vazio por padrão
  cy.get('input[name="email"]').should('have.value', '');
});

When('eu deixo a senha vazia', () => {
  // Campo já está vazio por padrão
  cy.get('input[name="password"]').should('have.value', '');
});

// Ação de login
When('eu clico no botão de login', () => {
  cy.get('button[type="submit"]').click();
});

// Passos de validação - Redirecionamento
Then('eu devo ser redirecionado para a página de sucesso', () => {
  cy.url().should('include', '/dashboard');
});

Then('eu devo ser redirecionado para a página de recuperação de senha', () => {
  cy.url().should('include', '/recuperar-senha');
});

// Passos de validação - Mensagens
Then('eu devo ver a mensagem {string}', (mensagem) => {
  cy.contains(mensagem).should('be.visible');
});

Then('eu devo ver uma mensagem de erro', () => {
  cy.get('[class*="error"], [class*="alert-danger"], .alert-error').should('be.visible');
});

Then('eu devo ver o texto {string}', (texto) => {
  cy.contains(texto).should('be.visible');
});

// Ações adicionais
When('eu clico em {string}', (botao) => {
  cy.contains(botao).click();
});

# Testes de Login com Gherkin e Cypress

Este projeto implementa cenários de teste de login seguindo o padrão **BDD (Behavior-Driven Development)** com a sintaxe **Gherkin**.

## Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── login.cy.js          # Implementação dos testes em Cypress
│   └── login.feature        # Especificação em Gherkin (documentação)
├── support/
│   ├── commands.js
│   ├── e2e.js
│   └── step_definitions/
│       └── login_steps.js   # Step definitions (documentação de referência)
```

## Cenários de Teste Implementados

### 1. **Login com Sucesso**
- **Dado:** O usuário está na página de login
- **Quando:** Preenche email válido e senha válida e clica em login
- **Então:** É redirecionado para o dashboard e vê mensagem de sucesso

### 2. **Login com Email Vazio**
- **Dado:** O usuário está na página de login
- **Quando:** Deixa o email vazio, preenche a senha e clica em login
- **Então:** Vê mensagem de erro "Email é obrigatório"

### 3. **Login com Senha Vazia**
- **Dado:** O usuário está na página de login
- **Quando:** Preenche o email, deixa a senha vazia e clica em login
- **Então:** Vê mensagem de erro "Senha é obrigatória"

### 4. **Login com Email Inválido**
- **Dado:** O usuário está na página de login
- **Quando:** Preenche um email inválido e clica em login
- **Então:** Vê mensagem de erro "Email inválido"

### 5. **Login com Senha Inválida**
- **Dado:** O usuário está na página de login
- **Quando:** Preenche email válido mas senha incorreta e clica em login
- **Então:** Vê mensagem de erro "Email ou senha inválidos"

### 6. **Recuperar Senha**
- **Dado:** O usuário está na página de login
- **Quando:** Clica no link "Esqueci minha senha"
- **Então:** É redirecionado para a página de recuperação de senha

## URL dos Testes

- **Base URL:** `https://automationpratice.com.br`
- **Página de Login:** `/login`

## Como Executar

### Executar todos os testes de login
```bash
npm run test -- cypress/e2e/login.cy.js
```

### Executar um teste específico
```bash
npm run test -- cypress/e2e/login.cy.js --spec "Cenário: Login com sucesso"
```

### Executar em modo interativo (Cypress GUI)
```bash
npx cypress open
```

## Seletores CSS Utilizados

- `input[name="email"]` - Campo de email
- `input[name="password"]` - Campo de senha
- `button[type="submit"]` - Botão de login
- `[class*="error"], [class*="alert-danger"], .alert-error` - Mensagens de erro

## Padrão Gherkin

Todos os testes seguem a estrutura Gherkin:

```gherkin
Feature: Descrição da funcionalidade
  Scenario: Descrição do cenário
    Given (Dado) - Estado inicial
    When (Quando) - Ação do usuário
    Then (Então) - Resultado esperado
```

## Arquivos de Referência

- **login.feature** - Arquivo com especificação completa em Gherkin (PT-BR)
- **login_steps.js** - Arquivo com as definições dos passos (referência para integração futura com cucumber.js)

## Próximas Melhorias

- Integração com cucumber.js para gerar relatórios detalhados de BDD
- Adicionar Page Object Model (POM) para melhor manutenção
- Implementar testes de performance
- Adicionar testes de acessibilidade

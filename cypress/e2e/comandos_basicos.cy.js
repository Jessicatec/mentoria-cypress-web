describe('Comandos básicos', () => {
  
  // Executa antes de CADA teste do bloco descriptivo
  beforeEach(() => {
    cy.visit('https://automationpratice.com.br/login');
  });

  it('Abrir uma URL', () => {
    // O cy.visit já é executado pelo beforeEach
    cy.url().should('include', '/login'); 
  });

  it('Encontrar elementos', () => {
    // get: busca pelo ID do campo de usuário
    cy.get('#user');

    // find: limita o escopo buscando .form-control estritamente dentro de .mc-form
    cy.get('.mc-form').find('.form-control');

    // contains: encontra elementos que tenham o texto exato especificado
    cy.get('.mc-form').contains('Send');
  });

  it('Preencher campos', () => {
    // Busca os campos de entrada dentro do formulário e digita o e-mail simulando o 'Enter'
    cy.get('.mc-form').find('.form-control').type('meuemail@teste.com{enter}');
  });

  it('Click no elemento', () => {
    // Clica no botão de login da página
    cy.get('#btnlogin').click();
  });

  it('Selecionar DropDown', () => {
    // Navega especificamente para a página de checkout que contém o dropdown
    cy.visit('https://automationpratice.com.br/checkout-one');

    //O valor deve ser enviado obrigatoriamente como uma string ('usa')
    cy.get('#country').select('usa');
  });

  it.only('checkbox/Radio', () => {
    // Navega especificamente para a página de checkout que contém o dropdown
    cy.visit('https://automationpratice.com.br/checkout-one');
  
    cy.get('#materialUnchecked').check()
    cy.get('#materialUnchecked').uncheck()
  });

   it('Validar um elemento', () => {
   cy.visit('https://automationpratice.com.br/login')
   cy.get('#user').type('email@teste.com')
   cy.get('#password').type('123456')
   cy.get('#btnlogin').click();

   cy.get('#swal2-title')
    .should('be.visible')
    .should('have.text', 'Login reallizado!')

})
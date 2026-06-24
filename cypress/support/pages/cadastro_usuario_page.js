export function acessarCadastro() {
    cy.visit('#register');

}

export function preencherNome(nome) {
    cy.preencheCampo('#user').type(nome);
}

export function preencherEmail(email) {
    cy.preencheCampo('#email').type(email);
}

export function preencherSenha(senha) {
    cy.preencheCampo('#password').type(senha);
}

export function Cadastrar() {
    cy.get('#btnRegister').click();
}

}

export function CadastrarUsuario(nome,email,senha) {
acessarCadastro()
preencherNome(nome)
preencherEmail(email)
preencherSenha(senha)
Cadastrar()

}
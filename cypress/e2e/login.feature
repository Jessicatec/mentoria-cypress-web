# language: pt-BR
Funcionalidade: Login no Sistema de Automação
  Como um usuário
  Quero fazer login no sistema
  Para acessar minha conta

  Contexto:
    Dado que estou na página de login

  Cenário: Login com sucesso
    Quando eu preencho o email com "usuario@email.com"
    E eu preencho a senha com "Senha@123"
    E eu clico no botão de login
    Então eu devo ser redirecionado para a página de sucesso
    E eu devo ver a mensagem "Login realizado com sucesso"

  Cenário: Login com email vazio
    Quando eu deixo o email vazio
    E eu preencho a senha com "Senha@123"
    E eu clico no botão de login
    Então eu devo ver uma mensagem de erro
    E eu devo ver o texto "Email é obrigatório"

  Cenário: Login com senha vazia
    Quando eu preencho o email com "usuario@email.com"
    E eu deixo a senha vazia
    E eu clico no botão de login
    Então eu devo ver uma mensagem de erro
    E eu devo ver o texto "Senha é obrigatória"

  Cenário: Login com email inválido
    Quando eu preencho o email com "email_invalido"
    E eu preencho a senha com "Senha@123"
    E eu clico no botão de login
    Então eu devo ver uma mensagem de erro
    E eu devo ver o texto "Email inválido"

  Cenário: Login com senha inválida
    Quando eu preencho o email com "usuario@email.com"
    E eu preencho a senha com "SenhaErrada"
    E eu clico no botão de login
    Então eu devo ver uma mensagem de erro
    E eu devo ver o texto "Email ou senha inválidos"

  Cenário: Recuperar senha
    Quando eu clico em "Esqueci minha senha"
    Então eu devo ser redirecionado para a página de recuperação de senha
    E eu devo ver o texto "Digite seu email para recuperar a senha"

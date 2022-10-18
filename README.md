<h1 align="center">
    <img alt="Logo da Compass" src="https://github.com/emanuelAlbuquerque/projeto-loginCompass/blob/main/src/assets/logo-compass-home.svg" height="200" width="400"/>
</h1>

<h1 align="center"> 
	 🚀 Keepalive 🚀
</h1>

## 💻 Sobre o projeto

📚 História - Eu, como usuário, quero poder logar no website de colaboradores da Compass para que eu consiga acessar com segurança e usufruir das funcionalidades disponíveis.

⏳ Cenário Atual - Atualmente não temos um sistema e login num ambiente digital que promova uma maior integração e centralização de funcionalidade para colaboradores na Compass.⠀⠀⠀

🎥 Cenário Desejado - Desejamos um login que possa permitir uma boa usabilidade ao usuário.

Os colaboradores da CompassUOL, poderão ter acesso a plataforma por meio de:
- seu e-mail corporativo
- sua senha

Projeto desenvolvido com os conhecimentos adiquirios até a Sprint 4 do estágio Front-End da [CompassUOL🧭](https://compass.uol/pt/home/?utm_source=google-ads&utm_medium=ppc&utm_campaign=compasso-uol-institucional&utm_term=compassuol).

## 🧑‍💻 Funcionalidades

- Caso o usuário tente realizar o login com senha ou e-mail errado, o mesmo receberá uma resposta de erro da interface
- caso ele informe corretamente será direcionado para uma página home
- a página home tem até 600 segundos de tempo logado, ao bater o tempo a interface perguntará se ele deseja continuar logado ou se deseja sair
- caso clique em sair voltará para página de login, caso clique em "Não" a página da um reflesh
- lógica onde mostra o dia, a data, a hora atual do usuário
- lógica que pega a localidade do usuário, e mostra a temperatura da sua região
- Local Storage: Os dados preenchidos de login e password são armazenados em memória, caso o usuário realize o logout, aparece um Pop-up que pergunta ao usuário se deseja continuar logado, caso deseje, o login será automático sem a necessidade de preencher os campos novamente, caso contrário o local storage deverá ser resetado
- caso clique em "Continuar Navegando" o usuário será direcionado para a páginas de notícias da UOL


## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/D9NUCsGJ1gCvmL0ZUnb7SJ/keepalive?node-id=1%3A3">
  <img alt="Made by tgmarinho" src="https://img.shields.io/static/v1?label=Acessar layout&message=Figma&color=rgb(255, 153, 0)">
</a>

### Web

- Login
<p align="center" style="display: flex; align-items: flex-start; justify-content: center; flex-direction: column;">
  <img alt="Tela de login" src="https://github.com/emanuelAlbuquerque/projeto-loginCompass/blob/main/src/assets/img-README/login.png">
  <img alt="Tela de login preenchido" src="https://github.com/emanuelAlbuquerque/projeto-loginCompass/blob/main/src/assets/img-README/login-preenchido.png">
  <img alt="Tela de login com error" src="https://github.com/emanuelAlbuquerque/projeto-loginCompass/blob/main/src/assets/img-README/login-error.png">
</p>

- Home
<p align="center" style="display: flex; align-items: flex-start; justify-content: center; flex-direction: column;">
  <img alt="Tela de home" src="https://github.com/emanuelAlbuquerque/projeto-loginCompass/blob/main/src/assets/img-README/home.png">
  <img alt="Modal de refresh" src="https://github.com/emanuelAlbuquerque/projeto-loginCompass/blob/main/src/assets/img-README/modal-refresh_home.png">
  <img alt="Modal de logout" src="https://github.com/emanuelAlbuquerque/projeto-loginCompass/blob/main/src/assets/img-README/modal-logout_home.png">
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- HTML5 <img align="center" alt="Emanuel-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
- CSS3 <img align="center" alt="Emanuel-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
- SASS <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="30" width="40" />
- JavaScript <img align="center" alt="Emanuel-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">


## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🧭 Rodando a aplicação web (Front End)

```bash
# Clone este repositório
$ git clone https://github.com/emanuelAlbuquerque/projeto-loginCompass.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd projeto-loginCompass

# Abra a pasta no vsCode

# Abra a pasta com o liveServer
```


## 📝 Autor

Feito com ❤️ por José Emanuel da Silva Souza Albuquerque 👋🏽 [Entre em contato!](https://www.linkedin.com/in/emanuel-albuquerque-2abb5a232/)

©️ José Emanuel / CompassUOL - 2022


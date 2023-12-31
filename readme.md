## Organizer

### Deploy: https://accountsfront.vercel.app/

#### Olá, me chamo Daniel Hott e esta é uma aplicação fullstack de Organizador que permite adicionar, editar e excluir seus boletos.

### Tecnologias: 

#### Frontend: 

React.js com Typescript e styled-components.

#### Backend:

Node.js com Typescript, express, cors, dotenv, sequelize e bcrypt para senhas hasheadas.

#### Banco de dados:

Postgres:10.17

#### Docker:

Docker-compose para buildar e subir a aplicação em qualquer máquina.

### Prints da aplicação:

#### Login -  Na página de login, há a possibilidade de fazer o login e criar nova conta.

![Web 1](https://github.com/DanielHott/imagens/blob/master/organizar_login.png)

#### Registrate -  Na página de registrar usuário, há a possibilidade de criar uma nova conta.

![Web 1](https://github.com/DanielHott/imagens/blob/master/organizar_cadastrate.png)

#### Main -  Na página principal, o usuário pode cadastrar uma nova conta, apagar ou editar, além voltar para a tela de login.

![Web 1](https://github.com/DanielHott/imagens/blob/master/organizar_main.png)


### Para rodar a aplicação, deve ter o docker instalado na máquina.

#### Passos para rodar a aplicação:

1 - Vá pelo terminal até a pasta `Organizer`

2 - Certifique que não há nada rodando nos endpoints: `http://localhost:3000/` e `http://localhost:6585/`

2 - Rode o comando `docker-compose build`

3 - Rode o comando `docker-compose up`

4 - Após o processo de configuração do conteiner, confira a aplicação frontend rodando em `http://localhost:3000/` e backend rodando em `http://localhost:6585/`

#### Meus dados:

Linkedin: `https://www.linkedin.com/in/danielhott/`;

Github: `https://github.com/DanielHott`;

<h1 align="center">
    <img alt="Proffy" title="Proffy" src=".github/logo.png" width="250px" />
</h1>

<p align="center">
  <a href="#page_facing_up-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-web">Web</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-mobile">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias Utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-como-configurar-e-executar">Como configurar e executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br/>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mausampaio/proffy?style=flat-square">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mausampaio/proffy?style=flat-square">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/mausampaio/proffy?style=flat-square">
  
  <a href="https://github.com/mausampaio/proffy/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/mausampaio/proffy?style=flat-square">
  </a>  
</p>

<br/>

<h3 align="center">
  <img alt="ecoleta" title="github_explorer" src=".github/capa.png" />
</h3>

<br/>


## :page_facing_up: Sobre

O Proffy é uma plataforma de estudo online, com o objetivo de facilitar a interação entre alunos e professores. Na versão atual os professores podem se cadastrar pela interface web, escolhendo as matérias e os horários disponíveis para aulas e no aplicativo mobile os alunos podem buscar pelos professores filtrando por matéria, dia da semana e horário, e posteriormente entrar em contato com um professor. 

Esse projeto foi desenvolvido durante a Next Level Week #2, ministrado pela [Rocketseat](https://rocketseat.com.br/).

<br/>

## :computer: Web

<h3 align="center">
  <img alt="ecoleta" title="github_explorer" src=".github/web.gif" />
</h3>

<br/>

## :iphone: Mobile

<h3 align="center">
  <img alt="ecoleta" title="github_explorer" src=".github/mobile.gif" />
</h3>

<br/>

## :art: Layout

Os arquivos de layout do figma tanto da versão web quando mobile podem ser encontrados na raiz do repositório, basta importar no seu figma.

## :rocket: Tecnologias Utilizadas

- [Node.js](https://nodejs.org/en)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [ReactJS](https://github.com/facebook/react)
- [React Native](https://github.com/facebook/react-native)

<br/>

## :gear: Como configurar e executar

### Pré-requisitos

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina.
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina.

```bash

    # Clonar o repositório
    $ git clone https://github.com/mausampaio/ecoleta.git 'proffy'

    # Navegar para o diretório
    $ cd proffy

```
#### Back-end

- No arquivo [knexfile.ts](backend/knexfile.ts) configure os parâmetros de acesso ao banco de dados.

```bash

    # Navegar para o diretório
    $ cd backend
    
    # Instalar as dependências
    $ yarn install
    
    # Executar migrations para criação das tabelas na base de dados
    $ yarn knex:migrate

    # Iniciar o projeto
    $ yarn start

```

#### Web

```bash

    # Navegar para o diretório
    $ cd web
    
    # Instalar as dependências
    $ yarn install

    # Iniciar o projeto
    $ yarn start
    
    # Executar build
    $ yarn build

```

#### Mobile

```bash

    # Navegar para o diretório
    $ cd mobile
    
    # Instalar as dependências
    $ yarn install

    # Iniciar o projeto
    $ yarn start
    
```

<br/>

---

<h4 align="center">
  Feito com :purple_heart: by <a href="https://www.linkedin.com/in/mausampaio/" target="_blank">Maurício Sampaio</a>.
</h4>
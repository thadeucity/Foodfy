<h1 align="center">
    <img alt="Foodfy Logo" src="./public/img/logo.png" width="100px" />
</h1>

<h3 align="center">
  Final exercise for the Rocketseat Bootcamp: Launchbase
</h3>

<p align="center">

  <a href="https://victoralvarenga.com">
    <img alt="Made by Victor Alvarenga" src="https://img.shields.io/badge/made%20by-Victor Alvarenga-%23134F84">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23134F84">
  </a>

</p>

<p align="center">
  <a href="#blue_book-English">English</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="##blue_book-Português">Português</a>
</p>

<img alt="Foodfy Logo" src="./sampleImages/homepage.png"/>

## :blue_book: English

### Description

A website to list Recipes and Chefs for the end-user with an **Admin** interface with login certification for all the people responsible to update and maintain the website.

`(All the graphic layout and design was provided by` [Rocketseat](https://github.com/Rocketseat)`)`

----------------------

### Instalation

Create a `.env` file with the variables below :
```js
SESSION_SECRET = // enter a randon set of characters

MAILER_USER = // enter your mailer username
MAILER_PASS = // enter your mailer password

DB_USER = //enter your Postgrees database username
DB_PASS = // enter your Postgress database password
```

After that you can run:
``` 
npm install 
```

Now you need to start your database with the code provided in the `database.sql` file.



Finaly if you want to populate all SQL tables with test data you can run
``` 
node seed.js 
```



----------------------
### Modules / Frameworks


- `express`
- `express-session`
- `method-override`
- `nunjuks`
- `request`
- `multer`
- `bcrypt`
- `pg`
- `pg-simple`
- `node mailer`
- `intl`
- `faker`

----------------------
### Project Requirements 

#### - Public Area

- [x] Recipes Page
- [x] Detailed Recipe Pages
- [x] Search Page for Recipes with pagination
- [x] Hide and Show buttons to switch parts of the recipe
- [x] Chefs Page
- [x] Detailed Chef Pages with their respective recipes
- [x] About Page

#### - Admin Area

- [x] Login for user authentication
- [x] User restricted pages and actions depending on user status
- [x] Welcome e-mail and password recovery e-mail with token validation 
- [x] Image upload system
- [x] Create, Edit and Delete functions for users, chefs and recipes
- [x] Validations to prevent users to change data they are not sopose to change
- [x] Validations to prevent users from entering invalid arguments inside the front-end forms
- [x] Hashed password storage
- [x] Automated data insertion with seed function for testing 
- [x] Floating animated messages  
- [x] Color coded boxes showing inputs that are not complient with the system rules

----------------------
### Project Extras

<blockquote>Extra features that I implemented beyond the original requirements</blockquote>

- [x] Custom error pages
- [x] Regex validation to improve password security preventing users to choose weak passwords
- [x] Account validation process before the user is alowed to use the system
- [x] Html email builder module, to create custom emails with better style.
- [x] Dinamic image creator using [Placehold](http://placehold.it/) API

----------------------
<br/><br/><br/><br/><br/><br/>

## :blue_book: Português

### Descrição

Um website para listar receitas e Chefes de cozinha para o usuário final mais uma interface **Admin** com acesso certificado por Login para todos os responsáveis pela atualização e manutenção do Site.

`(Todo desenvolvimento da parte gráfica foi realizado pela` [Rocketseat](https://github.com/Rocketseat)`)`

----------------------

### Instalação

Crie um arquivo `.env` com as variáveis listadas abaixo :
```js
SESSION_SECRET = // entre uma série de caracteres randômicos

MAILER_USER = // entre o username do seu servidor de email
MAILER_PASS = // entre a senha do seu servidor de email

DB_USER = // Entre com seu usuário do seu banco de dados Postgrees
DB_PASS = // Entre com sua senha do seu banco de dados Postgrees
```

Depois disso você pode rodar
``` 
npm install 
```

Agora você deverá iniciar seu banco de dados SQL com o código encontrado no arquivo `database.sql`



Finalmente, caso queira popular suas planilhas do banco de dados com dados fictícios para teste rode o comando abaixo:
``` 
node seed.js 
```



----------------------
### Módulos / Frameworks


- `express`
- `express-session`
- `method-override`
- `nunjuks`
- `request`
- `multer`
- `bcrypt`
- `pg`
- `pg-simple`
- `node mailer`
- `intl`
- `faker`

----------------------
### Requisitos do Projeto

#### - Área Pública

- [x] Página de receitas
- [x] Página detalhada das receitas
- [x] Página de busca de receitas com paginação
- [x] Botões para esconder e mostrar partes da receita
- [x] Página de Chefs
- [x] Página com as informações do Chef e suas respectivas receiras
- [x] Página Sobre

#### - Área Administrativa

- [x] Login para autenticação de usuário
- [x] Restições de navegação e edição baseadas nas permições de cada usuário
- [x] Email automático de boas vindas e recuperação de senha com geração de Token 
- [x] Sistema de Upload de imagens
- [x] Funções de criar, editar e deletar para usuários, chefs e receitas
- [x] Validações para prevenir que o usuário altere informações que ele não deveria
- [x] Validações para prevenir que o usuário entre dados inválidos nos formulário do site
- [x] Armazenamento de senhas de forma criptografada
- [x] Função de inserção automatizada de dados para testes.
- [x] Mensagens flutuantes e animadas para comunicação com o usuário
- [x] Caixas de entradas de dados com indicadores coloridos para alertar o usuário sobre a inserção de dados inválidos

----------------------
### Extras de Projeto

<blockquote>Funcionalidades extras que adicionei ao prejeto além de seu escopo original</blockquote>

- [x] Páginas de erro customizadas
- [x] Validação de senhas por Regex para prevenir que o usuário insira senhas muito fracas
- [x] Requisição de validação de conta antes que o usuário possa ter acesso às áreas administrativas do site
- [x] Módulo de criação de emails Html para criação de emails customizados com maior facilidade
- [x] Gerador dinâmico de imangens utilizando a API do [Placehold](http://placehold.it/)

----------------------
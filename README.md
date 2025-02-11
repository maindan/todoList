
# TodoList - Backend

Esse projeto é parte do desafio da Enablers, cujo objetivo era criar uma aplicação fullstack simples realizando um crud de tarefas.

A primeira parte desse desafio (frontend) pode ser encontrado no link:
https://github.com/maindan/todolist-front


## Requisitos

- Para utilização desse projeto é necessário que você possua o Mysql instalado em sua máquina para utilização do banco de dados.
- A instalação do Mysql pode ser feita através do site: https://dev.mysql.com/downloads/installer/ ou se preferir, pode rodar o Mysql em um container docker através da imagem oficial no link: https://hub.docker.com/_/mysql.
## Instalação

Faça um clone deste repositório, abra o terminal dentro da pasta principal do projeto e rode o comando para instalar as dependências do projeto:

```bash
  npm install
```
Após instalar as dependências é necessário criar um arquivo de nome ".env" na raiz do projeto, copie as variáveis do arquivo example.env e preencha conforme as informações:

```bash
DB_USER=nome do usuario do banco (padrão root)
DB_PASS=senha do banco (padrão root)
DB_NAME=escolha qual será o nome do banco, por exemplo todo_db
DB_PORT=porta onde o banco está rodando (padrão 3306)
HOST=(padrão localhost)
DIALECT=banco de dados utilizado (mysql)
PORT=porta onde a aplicação irá rodar (padrão 3001)
```
Observação importante: a variável PORT deve corresponder a mesma porta informada no arquivo App.jsx do frontend da aplicação, na variável baseUrl, por padrão setada em 3001.

### Migrações do banco
Este projeto foi desenvolvido com migrations do Sequelize, portanto é fundamental utilizar os comandos abaixo para realizar as migrações do banco de dados:
```bash
  npx sequelize-cli db:create
  npx sequelize-cli db:migrate
```


Após realizar as migrações, utilize o comando:
```bash
  npm start
```
Para iniciar o projeto.
## Funcionalidades

- Criação de tarefas
- Check de tarefas para conclusão
- Exclusão de tarefas


## Documentação da API

#### Retorna todas as tasks

```http
  GET /task
```
#### Cria uma nova task

```http
  POST /task
```
estrutura esperada do body:
```json
{
    "title":"string"
}
```
#### Atualiza uma task para finalizada

```http
  PUT /task/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

estrutura esperada do body:
```json
{
    "completed":"boolean"
}
```

#### Deletar task

```http
  PUT /task/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |


## Licença

[MIT](https://choosealicense.com/licenses/mit/)


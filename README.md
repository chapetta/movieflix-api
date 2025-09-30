# 🎬 MovieFlix API – Node.js + Express + PostgreSQL + Prisma + Swagger

Este projeto é uma **API RESTful** para gerenciamento de filmes, desenvolvida com **Node.js**, **Express**, **PostgreSQL** e **Prisma ORM**, com documentação utilizando **Swagger**.
Foi criada para praticar conceitos de **modelagem de banco de dados**, **CRUD com Prisma**, boas práticas de API REST e documentação interativa.
---

## 🚀 Tecnologias Utilizadas

- **Node.js + Express** — Criação do servidor e rotas da aplicação.
- **Prisma ORM** — Abstração e manipulação do banco de dados com tipagem forte.
- **PostgreSQL** — Banco de dados relacional para persistência.
- **Swagger UI** — Documentação e teste das rotas da API.
- **TypeScript** — Tipagem estática para maior segurança e produtividade.


---

## ⚙️ Funcionalidades

- [x] Listar Filmes — GET /movies → Retorna todos os filmes ordenados por título.
- [x] Criar Filme — POST /movies → Adiciona um novo filme (valida se já existe com mesmo título).
- [x] Atualizar Filme — PUT /movies/{id} → Atualiza os dados de um filme existente.
- [x] Deletar Filme — DELETE /movies/{id} → Remove um filme pelo ID.
- [x] Filtrar por Gênero — GET /movies/genre/{genreName} → Retorna filmes de um gênero específico.
- [x] Documentação Swagger — GET /docs → Interface interativa da documentação.

---
## 📑 Documentação Swagger

```
http://localhost:3000/docs
```

---



## 🎨 Modelagem do Banco
Tabelas:

- Movie → título, data de lançamento, gênero, idioma, número de Oscars.

- Genre → relacionamento 1:N com filmes.

- Language → relacionamento 1:N com filmes.
---

## 📥 Clone o repositório

```bash
git clone https://github.com/chapetta/movieflix-api.git
```


📂 Acesse a pasta do projeto

```bash
cd movieflix-api
```
⚙️ Instale as dependências

```bash
npm install
```
# ou
```
yarn install
```


▶️ Rode o projeto

``` bash
npm run dev
``` 
# ou
```
yarn dev
``` 


🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

Prática de CRUD completo com Prisma.

Modelagem de relacionamentos entre tabelas em PostgreSQL.

Uso de TypeScript com Express em APIs.

Documentação com Swagger para facilitar consumo e testes.

📜 Licença

Este projeto é de uso livre para fins de estudo. Sinta-se à vontade para contribuir ou sugerir melhorias!
📬 Contato

Yan Chapetta

    GitHub: https://github.com/chapetta
    
## 📫 Contato


- Email: **cha.petta@hotmail.com**
- LinkedIn: **https://www.linkedin.com/in/yan-chapetta**

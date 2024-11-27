# InstaLike Backend

Este projeto consiste no desenvolvimento de um backend para uma aplicação semelhante ao Instagram, com funcionalidades que permitem a criação, listagem e atualização de posts contendo imagens. Ele utiliza o MongoDB como banco de dados para armazenamento e integra a API Gemini, da Google, para a geração automática de descrições de imagens. O desenvolvimento foi realizado durante a **Imersão Dev de Backend**, um evento online de programação promovido pela Alura em parceria com o Google.

# Desenvolvimento da API

Esta API RESTful foi desenvolvida usando Node.js com o framework Express.js.  Ela segue uma arquitetura de rotas e controladores, onde cada rota da API é mapeada para uma função controladora responsável pela lógica de negócio.  As funções controladoras, por sua vez, usam modelos para interagir com o banco de dados MongoDB.  O sistema de upload de imagens é gerenciado pelo middleware Multer.  Para gerar descrições de imagens, a API utiliza a API Gemini da Google.


## Tecnologias Utilizadas

* **Node.js:** Ambiente de execução JavaScript.
* **Express.js:** Framework web para Node.js.
* **MongoDB:** Banco de dados NoSQL.
* **Multer:** Middleware para upload de arquivos (imagens).
* **@google/generative-ai:** SDK para interagir com a API Gemini da Google.
* **Visual Studio Code:** Editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS.
* **cors:** Middleware para habilitar CORS (Cross-Origin Resource Sharing)

# CORS (Cross-Origin Resource Sharing)

CORS é um mecanismo que permite ou bloqueia requisições de um servidor web para um recurso em um domínio diferente do domínio do qual o script está sendo executado.  Em outras palavras, ele define quais domínios externos podem fazer requisições à sua API.  Sem CORS configurado, seu frontend (se rodando em um domínio ou porta diferente do backend) não conseguiria acessar sua API, resultando em erros.

Neste projeto, o middleware `cors` está configurado para permitir requisições de `http://localhost:8000`.  Isso significa que somente requisições originadas desse endereço terão permissão para acessar os endpoints da API.  Para um ambiente de produção, você precisará configurar o CORS corretamente para permitir apenas as origens confiáveis.


## Pré-requisitos

Antes de executar o projeto, certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.  Você também precisará de uma conta no MongoDB Atlas e uma chave API do Google Gemini.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone <seu_repositorio_git>
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd <seu_repositorio_git>
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Crie um arquivo `.env` na raiz do projeto:**  Este arquivo conterá suas credenciais.  **Nunca faça commit deste arquivo no seu repositório!**  Ele deve conter as seguintes variáveis:

   ```
   STRING_CONEXAO=<sua_string_de_conexao_mongodb>
   GEMINI_API_KEY=<sua_chave_api_gemini>
   ```


## Execução

1. **Crie a pasta `uploads` na raiz do projeto:** Esta pasta irá armazenar as imagens enviadas.

2. **Execute a aplicação:**

   ```bash
   npm run dev
   ```

   Este comando inicia a aplicação em modo de desenvolvimento com watch para monitorar alterações no código.


## Rotas da API

* **GET /posts:** Retorna todos os posts.
* **POST /posts:** Cria um novo post (sem imagem).
* **POST /upload:** Envia uma imagem para um novo post (o nome do arquivo será usado como ID). A imagem deve ser enviada com a chave `imagem` no body da requisição.
* **PUT /upload/:id:** Atualiza um post existente com o ID fornecido.  A imagem deve existir na pasta `uploads` com o nome `id.png`. O body da requisição deve conter um campo `alt` para o atributo `alt` da imagem.

# InstaLike Backend

Este projeto é um backend para uma aplicação semelhante ao Instagram, permitindo a criação, listagem e atualização de posts com imagens.  Ele utiliza o MongoDB para armazenamento de dados e a API Gemini da Google para geração de descrições de imagens.

## Tecnologias Utilizadas

* **Node.js:** Ambiente de execução JavaScript.
* **Express.js:** Framework web para Node.js.
* **MongoDB:** Banco de dados NoSQL.
* **Multer:** Middleware para upload de arquivos (imagens).
* **@google/generative-ai:** SDK para interagir com a API Gemini da Google.
* **cors:** Middleware para habilitar CORS (Cross-Origin Resource Sharing)

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


## Considerações

* O código utiliza o nome original do arquivo como ID do post.  Para produção, é recomendado implementar uma estratégia mais robusta de geração de IDs únicos.
* A variável `corsOptions` no arquivo `server.js` define a origem permitida para requisições CORS.  Ajuste de acordo com sua necessidade.
* Certifique-se de ter as permissões corretas para criar e escrever arquivos na pasta `uploads`.
* Este README assume que você está familiarizado com o desenvolvimento backend em Node.js e com o uso do MongoDB e do Express.js.


Este README fornece uma base para o seu projeto.  Sinta-se à vontade para adicionar mais seções e detalhes conforme necessário. Lembre-se de manter o README atualizado à medida que o projeto evolui.

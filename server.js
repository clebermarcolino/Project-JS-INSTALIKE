import express from "express"; // Importa o módulo 'express' para criar a aplicação web
import routes from "./src/routes/postsRoutes.js";

// Criação da aplicação Express
const app = express();
app.use(express.static("uploads"));
routes(app);

// Define a porta em que o servidor irá escutar as requisições
app.listen(3000, () => {
    console.log("Servidor escutando... ");
});
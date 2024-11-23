import express from "express"; // Importa o framework Express para criar a aplicação web
import multer from "multer"; //  Importa o Multer para lidar com uploads de arquivos
import { listarPosts, postarNovoPost, uploadImagem }
from "../controllers/postsController.js"; // // Importa as funções controladoras para lidar com a lógica dos posts

// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Especifica o diretório para armazenar as imagens enviadas
        cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
    },
    filename: function (req, file, cb) {
        // Mantém o nome original do arquivo por simplicidade
        cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
    }
})

// Cria uma instância do middleware Multer
const upload = multer({storage: storage});

// Define as rotas usando o objeto Express app
const routes = (app) => {
    // Habilita o Express para entender requisições no formato JSON
    app.use(express.json());

    // Rota que responde a requisições GET para obter todos os posts
    app.get("/posts", listarPosts);
    //Rota para criar um post
    app.post("/posts", postarNovoPost)
    app.post("/upload", upload.single("imagem"), uploadImagem); // Chama a função controladora para processamento da imagem
};

export default routes;


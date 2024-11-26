import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados

// Conecta ao banco de dados utilizando a string de conexão passada no ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    // Obtém a instância do banco de dados 'imersao-instabyte' da conexão
    const db = conexao.db("imersao-instabyte");
    
    // Acessa a coleção 'posts' dentro do banco de dados
    const colecao = db.collection("posts");
    
    // Retorna todos os documentos da coleção 'posts' como um array
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabyte");
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id:new ObjectId(objId)}, {$set:novoPost});
}
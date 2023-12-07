import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserModel from './model.js';
import cors from 'cors';
import bodyParser from 'body-parser';

//config inicial
dotenv.config();
const app = express();
const PORT = 3000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));


//subindo o servidor
app.listen(PORT, () => {
    console.log('Servidor rodando');
})


//conectando ao banco de dados MongoDB
const mongoURI = process.env.DB_CONNECTION_STRING
mongoose.connect(mongoURI).then(() => {
    console.log('Conectado ao MongoDB')
})
.catch((err) => { 
    console.error('Erro ao se conectar com o Banco de dados', err)
})

//criando as Rotas
app.get('/', (req, res) => {
    res.status(200).send('deu bom');
});


app.post('/', async (req, res) => {
    try {
        const novoUser = new UserModel({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            pais: req.body.pais,
        });
        await novoUser.save();
        res.status(200).send('Dados salvos com sucesso');

        if(novoUser) {
            modal.show();
        }

    } catch (error) {
        console.error('Erro ao salvar os dados', error);
        res.status(500).send('Ocorreu um erro ao salvar os dados');
    }
})

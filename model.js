import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    pais: String,
});

const UserModel = mongoose.model('User', userSchema)

export default UserModel;
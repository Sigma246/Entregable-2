import mongoose from 'mongoose';

const UsuariosDB = new mongoose.Schema({

    nombre: {
        type: String,
        lowercase: true,
        trim: true,
        min: 4,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,    
        min: 4,
        unique: true,
        required: true,
    },

}, { timestamps: true });

const Usuario = mongoose.model('Usuarios', UsuariosDB);

export { UsuariosDB, Usuario as default };
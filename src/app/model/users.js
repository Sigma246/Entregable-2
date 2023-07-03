"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.UsuariosDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UsuariosDB = new mongoose_1.default.Schema({
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
exports.UsuariosDB = UsuariosDB;
const Usuario = mongoose_1.default.model('Usuarios', UsuariosDB);
exports.default = Usuario;
//# sourceMappingURL=users.js.map
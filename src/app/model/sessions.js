"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.SessionsDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const SessionsDB = new mongoose_1.default.Schema({
    nombre: { type: String },
    email: { type: String },
    location: { type: String },
    date_in: { type: String },
    date_out: { type: String },
    date_time: { type: String }
}, { timestamps: true });
exports.SessionsDB = SessionsDB;
const Sessions = mongoose_1.default.model('Sessions', SessionsDB);
exports.default = Sessions;
//# sourceMappingURL=sessions.js.map
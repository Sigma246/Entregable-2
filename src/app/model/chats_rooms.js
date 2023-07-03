"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Chats_roomsDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Chats_roomsDB = new mongoose_1.default.Schema({
    user: { type: String },
    room: { type: String },
    filter: { type: String },
    message: { type: String },
    state: { type: String },
}, { timestamps: true });
exports.Chats_roomsDB = Chats_roomsDB;
Chats_roomsDB.index({ createdAt: 1, });
const Chats_rooms = mongoose_1.default.model('Chats_rooms', Chats_roomsDB);
exports.default = Chats_rooms;
//# sourceMappingURL=chats_rooms.js.map
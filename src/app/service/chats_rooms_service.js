'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search_all_chat = exports.update_state_chat = exports.add_chat = void 0;
const chats_rooms_1 = __importDefault(require("../model/chats_rooms"));
// add message chat
const add_chat = (data) => new chats_rooms_1.default(data).save()
    .catch((e) => { throw { code: 403, message: "Mensaje no guardado", error: e }; });
exports.add_chat = add_chat;
// change state chat
const update_state_chat = (id, state) => chats_rooms_1.default.findByIdAndUpdate(id, { '$set': state })
    .catch((e) => { throw { code: 403, message: "Mensaje no actualizado", error: e }; });
exports.update_state_chat = update_state_chat;
// search message all 
const search_all_chat = (data) => chats_rooms_1.default.find(data)
    .sort({ 'createdAt': -1 })
    .limit(30)
    .catch((e) => { throw { code: 403, message: "Historial no actualizado", error: e }; });
exports.search_all_chat = search_all_chat;
//# sourceMappingURL=chats_rooms_service.js.map
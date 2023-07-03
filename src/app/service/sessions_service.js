'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add_sessions = void 0;
const sessions_1 = __importDefault(require("../model/sessions"));
// add user login
const add_sessions = (data) => sessions_1.default.findOneAndUpdate({ email: data.email, location: data.location, date_in: data.date_in }, { $set: data }, { upsert: true })
    .catch(e => { throw { code: 403, message: "Sesion add_sessions", error: e }; });
exports.add_sessions = add_sessions;
//# sourceMappingURL=sessions_service.js.map
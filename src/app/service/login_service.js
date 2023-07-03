'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = void 0;
const users_1 = __importDefault(require("../model/users"));
// find user login
const find = (data) => users_1.default.findOne({ email: data.email })
    .then(res => res || Promise.reject({ data: data, message: "Usuario no registrado / Password incorrecto " }))
    .catch(e => { throw ({ code: 403, error: e }); });
exports.find = find;
//# sourceMappingURL=login_service.js.map
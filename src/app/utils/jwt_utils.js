'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vify_jwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_1 = require("../../config/jwt");
const vify_jwt = (token) => new Promise((resolve, reject) => jsonwebtoken_1.default.verify(token, jwt_1.secret, (err, decoded) => { decoded == undefined ? reject(err) : resolve(decoded); }));
exports.vify_jwt = vify_jwt;
//# sourceMappingURL=jwt_utils.js.map
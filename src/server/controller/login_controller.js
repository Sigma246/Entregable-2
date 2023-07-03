"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const login_service_1 = require("../../app/service/login_service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_1 = require("../../config/jwt");
const find = (req, res) => (0, login_service_1.find)(req.body)
    .then(user => {
    const key = jsonwebtoken_1.default.sign({ user }, jwt_1.secret, jwt_1.auth);
    res.header(jwt_1.header, key).io({
        code: 200,
        message: "success.find_user",
        data: { user }
    });
})
    .catch(error => res.io({
    code: 500,
    message: "error.find_user",
    data: { error }
}));
exports.find = find;
//# sourceMappingURL=login_controller.js.map
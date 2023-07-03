"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This middleware verify if the user is a root user
 *
 
 */
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_1 = require("../../config/jwt");
const validationJWT = (token) => jsonwebtoken_1.default.verify(token, jwt_1.secret);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield validationJWT(req.headers['x-auth-token']);
        next();
    }
    catch (error) {
        res.io({ code: 403, message: "error.token", data: { error } });
    }
});
//# sourceMappingURL=jwtVerify_middleware.js.map
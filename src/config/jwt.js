'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.secret = exports.header = void 0;
exports.header = "x-auth-token";
exports.secret = process.env.JWT_SECRET || "tddDjg5zse$kpDndyecykuwc^4i8tprecgzhvn^kwyjxqrwgsXet^YHngjqufka,";
exports.auth = {
    expiresIn: process.env.JWT_AUTH_EXPIRESIN ? Number(process.env.JWT_AUTH_EXPIRESIN) : 60 * 60 * 1 // 5 hours in seconds
};
//# sourceMappingURL=jwt.js.map
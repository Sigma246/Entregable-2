'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    BASEURL: process.env.BASE_URL || "http://localhost:3000/",
    FRONTENDURL: process.env.FRONT_END_URL || "http://localhost:8081/",
    PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
    HOST: process.env.HOST || "http://localhost/"
};
//# sourceMappingURL=server.js.map
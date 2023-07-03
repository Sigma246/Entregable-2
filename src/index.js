'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/************************************************
 * Start file, init the app and clusterize pm2+redis  *
 *                                              *
  *
************************************************/
const bootstrap_1 = __importDefault(require("./server/bootstrap"));
const server_1 = require("./config/server");
const log_1 = __importDefault(require("./log"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app_1 = __importDefault(require("./server/app"));
const httpServer = http_1.default.createServer(app_1.default);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
});
(0, bootstrap_1.default)(io).then(() => {
    httpServer.listen(server_1.config.PORT, () => {
        log_1.default.info(`App server listen on ${server_1.config.HOST}:${server_1.config.PORT}`);
    });
}).catch(err => console.log(err));
//# sourceMappingURL=index.js.map
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = require("../config/connections");
const redis_1 = require("redis");
const redis_adapter_1 = require("@socket.io/redis-adapter");
const admin_ui_1 = require("@socket.io/admin-ui");
const contador_sockets_1 = __importDefault(require("../app/sockets/contador_sockets"));
const chats_rooms_sockets_1 = __importDefault(require("../app/sockets/chats_rooms_sockets"));
const pubClient = (0, redis_1.createClient)({ url: connections_1.redis.url_rds, password: connections_1.redis.pass_rds });
const subClient = pubClient.duplicate();
exports.default = (io) => new Promise((resolve, reject) => Promise.all([pubClient.connect(), subClient.connect()])
    .then(() => {
    io.adapter((0, redis_adapter_1.createAdapter)(pubClient, subClient));
    (0, admin_ui_1.instrument)(io, { auth: false, });
    (0, contador_sockets_1.default)(io);
    (0, chats_rooms_sockets_1.default)(io);
})
    .then(resolve)
    .catch(reject));
//# sourceMappingURL=redis.js.map
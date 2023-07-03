/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sessions_service_1 = require("../service/sessions_service");
const time_utils_1 = require("../utils/time_utils");
const jwt_utils_1 = require("../utils/jwt_utils");
exports.default = (io) => {
    const contador = io.of("/contador");
    contador.use((socket, next) => (0, jwt_utils_1.vify_jwt)(socket.handshake.auth['x-auth-token'])
        .then(next())
        .catch(err => next(new Error(err))));
    contador.on('connection', (socket) => {
        socket.on("disconnect", () => {
            (0, jwt_utils_1.vify_jwt)(socket.handshake.auth['x-auth-token'])
                .then((user) => (0, time_utils_1.time)()
                .then(date_out => {
                return {
                    nombre: user.user.nombre,
                    email: user.user.email,
                    location: socket.handshake.query.url,
                    date_in: socket.handshake.query.time,
                    date_out
                };
            }))
                .then((data) => (0, time_utils_1.msToTime)(new Date(data.date_out), new Date(data.date_in))
                .then(date_time => { data.date_time = date_time; return data; }))
                .then(sessions_service_1.add_sessions)
                .catch(e => { console.log(e); throw e; });
        });
    });
};
//# sourceMappingURL=contador_sockets.js.map
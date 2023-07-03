'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const chats_rooms_service_1 = require("../service/chats_rooms_service");
const jwt_utils_1 = require("../utils/jwt_utils");
exports.default = (io) => {
    const chats_rooms = io.of("/chats_rooms");
    chats_rooms.use((socket, next) => (0, jwt_utils_1.vify_jwt)(socket.handshake.auth['x-auth-token'])
        .then(next())
        .catch(err => next(new Error(err))));
    chats_rooms.on('connection', (socket) => {
        // ENTRANDO AL ROOM or FILTER
        socket.on('rooms', (room) => (0, chats_rooms_service_1.search_all_chat)(room)
            .then((messages) => {
            if (room.room) {
                socket.join(room.room);
            }
            ;
            if (room.filter) {
                socket.join(room.filter);
            }
            ;
            return messages;
        })
            .then((messages) => room.room ?
            socket.emit('historial', messages) :
            socket.emit('historial_filter', messages))
            .catch((e) => { console.log(e); throw e; }));
        //NEVIANDO NUEVO MENSAJE AL FILTRO
        socket.on('message', (menssage) => (0, chats_rooms_service_1.add_chat)(Object.assign(Object.assign({}, menssage), { state: 'pending' })) // para filtro
            //add_chat({...menssage, state: 'accepted' })  // sin filtro
            .then((res) => chats_rooms.to(res.filter).emit('message', {
            //.then((res:any)=> chats_rooms.to( res.room ).emit('message', {  // sin filtro
            _id: res.id,
            user: res.user,
            message: res.message,
            createdAt: res.createdAt
        }))
            .catch((e) => { console.log(e); throw e; }));
        // ENVIANDO MENSAJE AL ROOM
        socket.on('message_ge', (data) => (0, chats_rooms_service_1.update_state_chat)(data._id, { state: 'accepted' })
            .then((res) => {
            chats_rooms.to(res.room).emit('message', {
                _id: res.id,
                user: res.user,
                message: res.message,
                createdAt: res.createdAt
            });
            chats_rooms.to(res.filter).emit('delete', { _id: res.id });
        })
            .catch((e) => { console.log(e); throw e; }));
        // RECHAZAR MENSAJE POR FILTRO
        socket.on('disabled', (data) => (0, chats_rooms_service_1.update_state_chat)(data._id, { state: 'disabled' })
            .then((res) => chats_rooms.to(res.filter).emit('delete', { _id: res.id }))
            .catch((e) => { console.log(e); throw e; }));
        socket.on("disconnect", () => { });
    });
};
//# sourceMappingURL=chats_rooms_sockets.js.map
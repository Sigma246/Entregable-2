'use strict';

import { add_chat, update_state_chat, search_all_chat } from '../service/chats_rooms_service';
import { vify_jwt } from '../utils/jwt_utils';

export default (io:any) => {

    const chats_rooms = io.of("/chats_rooms");

    chats_rooms.use((socket:any, next:any) =>
        vify_jwt(socket.handshake.auth['x-auth-token'])
            .then(next())
            .catch(err => next(new Error(err))));

    chats_rooms.on('connection', (socket:any) => {

        // ENTRANDO AL ROOM or FILTER
        socket.on('rooms', (room:any) =>
            search_all_chat(room)
                .then((messages:any) => {
                    if (room.room) { socket.join(room.room) };
                    if (room.filter) { socket.join(room.filter) };
                    return messages;
                })
                .then((messages:any) => room.room ?
                    socket.emit('historial', messages) :
                    socket.emit('historial_filter', messages)
                )
                .catch((e:any) => { console.log(e); throw e }) );

        //NEVIANDO NUEVO MENSAJE AL FILTRO
        socket.on('message', (menssage:any) =>
            add_chat({ ...menssage, state: 'pending' })  // para filtro
            //add_chat({...menssage, state: 'accepted' })  // sin filtro
            .then((res:any) => chats_rooms.to(res.filter).emit('message', {  // para filtro
            //.then((res:any)=> chats_rooms.to( res.room ).emit('message', {  // sin filtro
                    _id: res.id,
                    user: res.user,
                    message: res.message,
                    createdAt: res.createdAt
                }))
                .catch((e:any) => { console.log(e); throw e }) );

        // ENVIANDO MENSAJE AL ROOM
        socket.on('message_ge', (data:any) => 
            update_state_chat(data._id, { state: 'accepted' })
                .then((res:any) => {
                    chats_rooms.to(res.room).emit('message', {
                        _id: res.id,
                        user: res.user,
                        message: res.message,
                        createdAt: res.createdAt
                    });
                    chats_rooms.to(res.filter).emit('delete', { _id: res.id });
                })
                .catch((e:any) => { console.log(e); throw e }) );

        // RECHAZAR MENSAJE POR FILTRO
        socket.on('disabled', (data:any) =>
            update_state_chat(data._id, { state: 'disabled' })
                .then((res:any) => chats_rooms.to(res.filter).emit('delete', { _id: res.id }))
                .catch((e:any) => { console.log(e); throw e }) );


        socket.on("disconnect", () => { });

    });


};


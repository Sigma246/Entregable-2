/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { add_sessions } from '../service/sessions_service';
import { time, msToTime } from '../utils/time_utils'
import { vify_jwt } from '../utils/jwt_utils'

export default (io:any) => {

    const contador = io.of("/contador");

    contador.use((socket:any, next:any) =>
        vify_jwt(socket.handshake.auth['x-auth-token'])
            .then(next())
            .catch(err => next(new Error(err))));

    contador.on('connection', (socket:any) => {

        socket.on("disconnect", () => {
            
            vify_jwt(socket.handshake.auth['x-auth-token'])
                .then((user:any) => time()
                    .then(date_out => {
                        return {
                            nombre: user.user.nombre,
                            email: user.user.email,
                            location: socket.handshake.query.url,
                            date_in: socket.handshake.query.time,
                            date_out
                        }
                    })
                )
                .then((data:any) => msToTime(new Date(data.date_out), new Date(data.date_in))
                    .then(date_time => { data.date_time = date_time; return data })
                )
                .then(add_sessions)
                .catch(e => { console.log(e); throw e })

        });

    });
};






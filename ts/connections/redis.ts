'use strict';

import { redis } from '../config/connections'
import { createClient } from 'redis';
import { createAdapter } from '@socket.io/redis-adapter';
import { instrument } from '@socket.io/admin-ui';

import contador from '../app/sockets/contador_sockets';
import chat_room from '../app/sockets/chats_rooms_sockets';


const pubClient = createClient({ url: redis.url_rds, password: redis.pass_rds });
const subClient = pubClient.duplicate();



export default (io: any) => new Promise((resolve, reject) =>

    Promise.all([pubClient.connect(), subClient.connect()])
        .then(() => {
            io.adapter(createAdapter(pubClient, subClient));
            instrument(io, { auth: false, });
            contador(io); 
            chat_room(io);
        })
        .then(resolve)
        .catch(reject)

);


'use strict';

/************************************************
 * Start file, init the app and clusterize pm2+redis  *
 *                                              *
  *
************************************************/

import bootstrap from './server/bootstrap';
import { config } from './config/server';
import logger from './log';
import http from 'http';
import { Server } from 'socket.io';
import app from './server/app';


const httpServer = http.createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
});

bootstrap(io).then(()=>{
    httpServer.listen(config.PORT, () => {
        logger.info(`App server listen on ${config.HOST}:${config.PORT}`);
    })
}).catch(err=>console.log(err))






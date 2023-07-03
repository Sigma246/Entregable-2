'use strict';

/************************************************
 * Export the express app                       *
 *                                              *
  *
 ************************************************/
import express from 'express';
import cors from 'cors';
import { header } from '../config/jwt'

/**
 * Configure passport strategies
 */

const app = express();

/***************
 * CORS config     *
 ***************/
const corsOptions = {
    origin: '*',
    exposedHeaders: header
}
app.use(cors(corsOptions))

/***************
 * Globals     *
 ***************/
import logger from './../log';
app.set("logger", logger);


/***************
 * Middlewares *
 ***************/
import bodyParser from 'body-parser';
import io from './middlewares/io_middleware';
import error from './middlewares/error_middleware';
import { logs_report } from './middlewares/logs_middleware';

app.use(io);
app.use(logs_report);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**************
 * App routes *
 **************/

import routes from './routes';

app.use(routes);

// 404 Routes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((req:any, res:any) => res.io({ code: 404, message: "error.not_found" }));

// THIS MANDATORY NEEED TO BE THE LAST MIDDLEWARE
// DON USE MIDDLEWARES AFTER THIS
app.use(error);
export default app;
'use strict';

/*******************************************************************************
 * Bootstrap files to promisify all the things needed before start the server, *
 * like database connections                                                   *
 *                                                                             *
                                 *
 *******************************************************************************/

import mongoose from './../connections/mongoose';
import redis from './../connections/redis'
import models from './../app/model';

export default (io: any) => Promise.all([
    redis(io),
    mongoose,
    models
]);
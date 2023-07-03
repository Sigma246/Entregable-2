"use strict";
/*************************************
 * Config file for connections
 *
 
 *************************************/


interface mongo {
    url: string;
    debug: boolean;
}

interface redis {
    pass_rds: string;
    url_rds: string;
}

export const mongo:mongo = {
    url: process.env.MONGODB_URI || "mongodb://localhost:27017/entregable",
    debug: process.env.MONGO_DEBUG? Boolean(process.env.MONGO_DEBUG) : true
};

export const redis:redis = {
    pass_rds: process.env.REDISCACHEKEY || "",
    url_rds: process.env.REDISCLOUD_URL || "redis://localhost:6379"
}

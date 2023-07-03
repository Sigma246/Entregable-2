"use strict";
/**************************************************************************************************
 * Connect to mongodb using mongoose, it export a promise to handle the connected and error event *
 *                                                                                                *
                                                    *
 **************************************************************************************************/

import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { mongo } from '../config/connections';
import logger from '../log';

 // ============================
 //  Connections mongodb
 // ============================
 
 interface options {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let mongoDB: any = null;

const { connect, connection } = mongoose;

const options:options = { useNewUrlParser: true, useUnifiedTopology: true};

export default new Promise((resolve, reject) => {
    logger.info("mongo debug:", mongo.debug);

    mongoose.set("strictQuery", false);
    connect(mongo.url)
    
    const db = connection;
    mongoose.set("debug", mongo.debug);

    db.once("error", reject);
    db.once("connected", resolve);
    logger.info("mongo connection");
   
});

const createInstance = async () => {
    mongoDB = await MongoMemoryServer.create();
};  

const connectDB = async () => {
    await connect(mongo.url);
  };
  
  const closeDB = async () => {
    await connection.dropDatabase();
    await connection.close();
    await mongoDB.stop();
  };
  
  const clearDB = async () => {
    const { collections } = connection;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  };
  
  export const testingDB = {
    create: createInstance,
    connect: connectDB,
    close: closeDB,
    clear: clearDB,
  };
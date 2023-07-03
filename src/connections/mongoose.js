"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingDB = void 0;
/**************************************************************************************************
 * Connect to mongodb using mongoose, it export a promise to handle the connected and error event *
 *                                                                                                *
                                                    *
 **************************************************************************************************/
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
const connections_1 = require("../config/connections");
const log_1 = __importDefault(require("../log"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let mongoDB = null;
const { connect, connection } = mongoose_1.default;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
exports.default = new Promise((resolve, reject) => {
    log_1.default.info("mongo debug:", connections_1.mongo.debug);
    mongoose_1.default.set("strictQuery", false);
    connect(connections_1.mongo.url);
    const db = connection;
    mongoose_1.default.set("debug", connections_1.mongo.debug);
    db.once("error", reject);
    db.once("connected", resolve);
    log_1.default.info("mongo connection");
});
const createInstance = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoDB = yield mongodb_memory_server_1.MongoMemoryServer.create();
});
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connect(connections_1.mongo.url);
});
const closeDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connection.dropDatabase();
    yield connection.close();
    yield mongoDB.stop();
});
const clearDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const { collections } = connection;
    for (const key in collections) {
        const collection = collections[key];
        yield collection.deleteMany({});
    }
});
exports.testingDB = {
    create: createInstance,
    connect: connectDB,
    close: closeDB,
    clear: clearDB,
};
//# sourceMappingURL=mongoose.js.map
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
 * Bootstrap files to promisify all the things needed before start the server, *
 * like database connections                                                   *
 *                                                                             *
                                 *
 *******************************************************************************/
const mongoose_1 = __importDefault(require("./../connections/mongoose"));
const redis_1 = __importDefault(require("./../connections/redis"));
const model_1 = __importDefault(require("./../app/model"));
exports.default = (io) => Promise.all([
    (0, redis_1.default)(io),
    mongoose_1.default,
    model_1.default
]);
//# sourceMappingURL=bootstrap.js.map
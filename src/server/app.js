'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/************************************************
 * Export the express app                       *
 *                                              *
  *
 ************************************************/
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const jwt_1 = require("../config/jwt");
/**
 * Configure passport strategies
 */
const app = (0, express_1.default)();
/***************
 * CORS config     *
 ***************/
const corsOptions = {
    origin: '*',
    exposedHeaders: jwt_1.header
};
app.use((0, cors_1.default)(corsOptions));
/***************
 * Globals     *
 ***************/
const log_1 = __importDefault(require("./../log"));
app.set("logger", log_1.default);
/***************
 * Middlewares *
 ***************/
const body_parser_1 = __importDefault(require("body-parser"));
const io_middleware_1 = __importDefault(require("./middlewares/io_middleware"));
const error_middleware_1 = __importDefault(require("./middlewares/error_middleware"));
const logs_middleware_1 = require("./middlewares/logs_middleware");
app.use(io_middleware_1.default);
app.use(logs_middleware_1.logs_report);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
/**************
 * App routes *
 **************/
const routes_1 = __importDefault(require("./routes"));
app.use(routes_1.default);
// 404 Routes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((req, res) => res.io({ code: 404, message: "error.not_found" }));
// THIS MANDATORY NEEED TO BE THE LAST MIDDLEWARE
// DON USE MIDDLEWARES AFTER THIS
app.use(error_middleware_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/************************************************************
 * Local Logger, this logger outputs to the console, usage: *
 *                                                          *
 * logger.trace({foo: 'bar'});                              *
 * logger.debug({foo: 'bar'});                              *
 * logger.info({foo: 'bar'});                               *
 * logger.warn({foo: 'bar'});                               *
 * logger.error({foo: 'bar'});                              *
 *                                                          *
 ************************************************************/
const log_1 = __importDefault(require("./../config/log"));
const tracer_1 = __importDefault(require("tracer"));
const colors_1 = __importDefault(require("colors"));
const LEVELS = ["trace", "debug", "info", "warn", "error"];
const DEFAULT_LEVEL = "debug";
class LocalLogger {
    constructor({ level = 'debug' }) {
        let _this = this;
        _this.options = {};
        colors_1.default.enabled = true;
        _this.options.level = level.toLowerCase();
        _this.options.level =
            LEVELS.indexOf(this.options.level) > -1
                ? this.options.level
                : DEFAULT_LEVEL;
        _this.tracer = tracer_1.default.colorConsole({ level: this.options.level });
        // Attach a partial functions for each log level
        LEVELS.forEach(l => (_this[l] = _this.tracer[l]));
    }
}
/**
 * Export a new instance of logger
 */
exports.default = new LocalLogger(log_1.default);
//# sourceMappingURL=index.js.map
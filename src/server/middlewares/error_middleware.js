"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Middleware to handle app errors
 *
 
 */
const log_1 = __importDefault(require("./../../log"));
/**
 * Function to handle unknow errors
 * @param  {Object} req HttpRequest object
 * @param  {Object} res HttpResponse object
 */
const handleUnknowErrors = (err, req, res) => res.io(err.details || { code: 500, message: "error.internal_error" });
/**
 * Function to handle body request errors
 * @param  {Object} req HttpRequest object
 * @param  {Object} res HttpResponse object
 */
const handleParseBodyError = (req, res) => res.io({ code: 422, message: "error.malformed_body" });
/**
 * Error handler middleare
 */
exports.default = (err, req, res, next) => {
    log_1.default.info("Error handler:", err.details || err);
    switch (true) {
        case err instanceof SyntaxError:
            handleParseBodyError(req, res);
            break;
        default:
            handleUnknowErrors(err, req, res);
            break;
    }
};
//# sourceMappingURL=error_middleware.js.map
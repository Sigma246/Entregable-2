"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**************************************************************************
 * Config file for logging constants                                      *
 *                                                                        *
                            *
 **************************************************************************/
exports.default = {
    /**
     * Logging level, posible values:
     *
     * 'trace', 'debug', 'info', 'warn', 'error'
     *
     * @type {String}
     */
    level: process.env.LOG_LEVEL || "debug"
};
//# sourceMappingURL=log.js.map
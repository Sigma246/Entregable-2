'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/************************************************
 * Routes for the module ping                   *
 *                                              *
  *
 ************************************************/
const login_1 = __importDefault(require("./login"));
const users_1 = __importDefault(require("./users"));
const listado_1 = __importDefault(require("./listado"));
const express_1 = require("express");
const router = (0, express_1.Router)();
/**
 * Route to map:
 *  get: /welcome/
 */
router.use("/", login_1.default);
router.use("/", users_1.default);
router.use("/", listado_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map
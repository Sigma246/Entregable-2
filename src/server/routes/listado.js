"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const listado_controller_1 = require("../controller/listado_controller");
const jwtVerify_middleware_1 = __importDefault(require("../middlewares/jwtVerify_middleware"));
router
    .route(`/listado`)
    .get(jwtVerify_middleware_1.default, listado_controller_1.getListado);
exports.default = router;
//# sourceMappingURL=listado.js.map
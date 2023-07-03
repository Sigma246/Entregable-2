"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const users_controller_1 = require("../controller/users_controller");
const jwtVerify_middleware_1 = __importDefault(require("../middlewares/jwtVerify_middleware"));
router
    .route(`/user_create`)
    // save new user
    .post(jwtVerify_middleware_1.default, users_controller_1.add);
router
    .route(`/user_list`)
    // list user
    .get(jwtVerify_middleware_1.default, users_controller_1.find);
exports.default = router;
//# sourceMappingURL=users.js.map
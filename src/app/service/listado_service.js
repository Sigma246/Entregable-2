'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findservice = void 0;
const axios_1 = __importDefault(require("axios"));
const findservice = () => (0, axios_1.default)({
    method: 'get',
    timeout: 3000,
    url: 'https://jsonplaceholder.typicode.com/posts',
})
    .then(({ data }) => data);
exports.findservice = findservice;
//# sourceMappingURL=listado_service.js.map
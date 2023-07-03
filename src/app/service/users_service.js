/* eslint-disable @typescript-eslint/ban-ts-comment */
'use strict';
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
exports.find = exports.generate = void 0;
const users_1 = __importDefault(require("../model/users"));
const login_service_1 = require("./login_service");
// add user login
const generate = (data) => new users_1.default(data).save()
    .catch((e) => { throw { code: 403, message: "¡El usuario ya está registrado!", error: e }; });
exports.generate = generate;
const userDefault = (data) => (0, login_service_1.find)(data)
    .then(res => res)
    .catch(() => (0, exports.generate)(data))
    .then(res => res);
userDefault({
    email: "admin@hotmail.com",
    nombre: "admin",
});
const find = (paginate) => __awaiter(void 0, void 0, void 0, function* () {
    const pagina = Number(paginate.pagina) || 0;
    const limite = Number(paginate.limite) || 10;
    const nombre = paginate.nombre || '';
    const todod = yield users_1.default.aggregate([
        { $match: { nombre: { $regex: nombre } } },
        { $sort: { nombre: 1 } },
        { $facet: {
                // @ts-ignore
                metadata: [{ $count: "total" }],
                data: [{ $skip: pagina }, { $limit: limite }]
            }
        }
    ]);
    return todod;
});
exports.find = find;
//# sourceMappingURL=users_service.js.map
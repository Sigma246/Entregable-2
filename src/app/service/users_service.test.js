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
const users_1 = __importDefault(require("../model/users"));
const mongoose_1 = require("../../connections/mongoose");
const users_service_1 = require("./users_service");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () { return yield mongoose_1.testingDB.create(); }));
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () { return yield mongoose_1.testingDB.connect(); }));
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () { return yield mongoose_1.testingDB.clear(); }));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () { return yield mongoose_1.testingDB.close(); }));
describe('Users services', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const paginate = {
        pagina: 0,
        limite: 1
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const defaultData = {
        email: "correo1@hotmail.com",
        nombre: "nombreeeee",
    };
    it('List users', () => __awaiter(void 0, void 0, void 0, function* () {
        jest.spyOn(users_1.default, 'find').mockRejectedValue(new Error());
        yield expect((0, users_service_1.generate)(defaultData)).not.toBeNull();
        yield expect((0, users_service_1.find)(paginate)).resolves.not.toEqual(expect.objectContaining({ code: 403 }));
    }));
});
//# sourceMappingURL=users_service.test.js.map
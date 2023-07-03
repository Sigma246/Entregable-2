"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logs_report = void 0;
/**
 * Middleware to handle logs report
 */
let logs_report = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("***********************");
    console.log('method', req.method);
    console.log('Url', req.originalUrl);
    console.log('params', req.params);
    console.log('query', req.query);
    console.log("***********************");
    next();
});
exports.logs_report = logs_report;
//# sourceMappingURL=logs_middleware.js.map
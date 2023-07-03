'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/********************************************************************************************************************
 * File for app configuration                                                                                       *
 *                                                                                                                  *
 * This file loads all the files then add it to a JSON object, if worker.js is created in this directory, the final *
 * config object will be:                                                                                           *
 *                                                                                                                  *
 * {                                                                                                                *
 *  worker: {[worker.js content]}                                                                                   *
 * }                                                                                                                *
 *                                                                                                                  *
                                                                      *
 *                                                                                                                  *
 * Note: Config file must have a single export and it must be the "default", example:                               *
 *  export default {...}                                                                                            *
 ********************************************************************************************************************/
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// List files in this directory
let files = fs_1.default.readdirSync(__dirname);
// For every file found add a property to config var
let config = files.reduce(function (config, file) {
    // Prevent load this file
    if (file !== path_1.default.basename(__filename)) {
        let name = path_1.default.basename(file, path_1.default.extname(file));
        config[name] = Promise.resolve().then(() => __importStar(require(path_1.default.join(__dirname, file))));
    }
    return config;
}, {});
exports.default = config;
//# sourceMappingURL=index.js.map
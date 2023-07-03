"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = exports.mongo = void 0;
exports.mongo = {
    url: process.env.MONGODB_URI || "mongodb://localhost:27017/entregable",
    debug: process.env.MONGO_DEBUG ? Boolean(process.env.MONGO_DEBUG) : true
};
exports.redis = {
    pass_rds: process.env.REDISCACHEKEY || "",
    url_rds: process.env.REDISCLOUD_URL || "redis://localhost:6379"
};
//# sourceMappingURL=connections.js.map
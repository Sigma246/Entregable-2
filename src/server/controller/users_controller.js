"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = exports.add = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const users_service_1 = require("../../app/service/users_service");
const add = (req, res) => (0, users_service_1.generate)(req.body)
    .then(user => res.header().io({
    code: 200,
    message: "success.create_user",
    data: { user }
}))
    .catch(error => res.io({
    code: 500,
    message: "error.create_user",
    data: { error }
}));
exports.add = add;
const find = (req, res) => (0, users_service_1.find)(req.query)
    .then(users => res.header().io({
    code: 200,
    message: "success.find_users",
    data: { users }
}))
    .catch(error => res.io({
    code: 500,
    message: "error.find_user",
    data: { error }
}));
exports.find = find;
//# sourceMappingURL=users_controller.js.map
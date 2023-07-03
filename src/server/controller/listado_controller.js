"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListado = void 0;
const listado_service_1 = require("../../app/service/listado_service");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getListado = (req, res) => (0, listado_service_1.findservice)()
    .then((list) => res.header().io({
    code: 200,
    message: "success.find_list",
    data: { list }
}))
    .catch((error) => res.io({
    code: 500,
    message: "error.find_list",
    data: { error }
}));
exports.getListado = getListado;
//# sourceMappingURL=listado_controller.js.map
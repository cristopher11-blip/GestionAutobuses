"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const autentication_controller_1 = require("./controllers/autentication_controller");
function routes(app) {
    app.post('/registro', autentication_controller_1.registro);
}
exports.routes = routes;
//# sourceMappingURL=router.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injectable = Injectable;
const Registry_1 = require("../registry/Registry");
function Injectable() {
    return (target) => {
        Registry_1.Registry.getInstance().register(target);
    };
}

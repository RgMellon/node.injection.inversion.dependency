"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injectable = Injectable;
const deprecated_Registry_1 = require("../registry/deprecated_Registry");
// Esse carinha vai cair em desuso pois vou criar o @inject, mas em caso que nao precis de inversao, pode usar ele
function Injectable() {
    return (target) => {
        deprecated_Registry_1.Registry.getInstance().register(target);
    };
}

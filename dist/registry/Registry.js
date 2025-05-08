"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
const PlaceOrder_1 = require("../useCases/PlaceOrder");
class Registry {
    constructor() {
        this.services = new Map();
    }
    register(implementation) {
        const token = implementation.name;
        if (this.services.has(token)) {
            throw new Error(`${token} aleready registred`);
        }
        this.services.set(token, implementation);
    }
}
exports.Registry = Registry;
const r = new Registry();
r.register(PlaceOrder_1.PlaceOrder);

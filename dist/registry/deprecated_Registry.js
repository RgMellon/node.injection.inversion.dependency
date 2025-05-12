"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
/**
 * Usado quando nao precisa de inversao de dependencia, e vc pode depender da classe concreta, caso contrario usar o novo
 */
class Registry {
    constructor() {
        this.services = new Map();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Registry();
        }
        return this.instance;
    }
    register(implementation) {
        const token = implementation.name;
        if (this.services.has(token)) {
            throw new Error(`${token} aleready registred`);
        }
        this.services.set(token, implementation);
    }
    resolve(implementation) {
        var _a;
        const token = implementation.name;
        const impl = this.services.get(token);
        if (!impl)
            throw new Error(`${token} was not found`);
        const paramTypes = (_a = Reflect.getMetadata("design:paramtypes", impl)) !== null && _a !== void 0 ? _a : [];
        const dependencies = paramTypes.map((constructor) => this.resolve(constructor));
        return new impl(...dependencies);
    }
}
exports.Registry = Registry;

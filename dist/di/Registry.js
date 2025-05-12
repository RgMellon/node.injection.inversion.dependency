"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
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
    register(token, implementation) {
        if (this.services.has(token)) {
            throw new Error(`${token} aleready registred`);
        }
        this.services.set(token, implementation);
    }
    resolve(token) {
        var _a;
        const implementation = this.services.get(token);
        if (!implementation)
            throw new Error(`${token} was not found`);
        const paramTypes = (_a = Reflect.getMetadata("design:paramtypes", implementation)) !== null && _a !== void 0 ? _a : [];
        console.log({ paramTypes });
        const dependencies = paramTypes.map((_, index) => {
            const dependencyToken = Reflect.getMetadata(`inject:${index}`, implementation);
            console.log(dependencyToken);
            return this.resolve(dependencyToken);
        });
        return new implementation(...dependencies);
    }
}
exports.Registry = Registry;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inject = Inject;
function Inject(token) {
    return (target, propertyKey, propertyIndex) => {
        Reflect.defineMetadata(`inject:${propertyIndex}`, token, target);
    };
}
// em qual posicao esse token precisa ser injetado

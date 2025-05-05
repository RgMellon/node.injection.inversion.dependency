"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSesGateway = makeSesGateway;
const SESGateway_1 = require("../gateways/SESGateway");
function makeSesGateway() {
    return new SESGateway_1.SESGateway();
}

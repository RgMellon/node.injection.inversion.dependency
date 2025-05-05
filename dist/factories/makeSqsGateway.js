"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSqsGateway = makeSqsGateway;
const SQSGateway_1 = require("../gateways/SQSGateway");
function makeSqsGateway() {
    return new SQSGateway_1.SQSGateway();
}

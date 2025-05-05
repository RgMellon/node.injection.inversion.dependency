"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePlaceOrder = makePlaceOrder;
const PlaceOrder_1 = require("../useCases/PlaceOrder");
const makeDynamoRepository_1 = require("./makeDynamoRepository");
const makeSesGateway_1 = require("./makeSesGateway");
const makeSqsGateway_1 = require("./makeSqsGateway");
function makePlaceOrder() {
    return new PlaceOrder_1.PlaceOrder((0, makeDynamoRepository_1.makeDynamoRepository)(), (0, makeSqsGateway_1.makeSqsGateway)(), (0, makeSesGateway_1.makeSesGateway)());
}

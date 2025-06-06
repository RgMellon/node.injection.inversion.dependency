"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const SESGateway_1 = require("../gateways/SESGateway");
const SQSGateway_1 = require("../gateways/SQSGateway");
const DynamoDbRepository_1 = require("../repository/DynamoDbRepository");
const PlaceOrder_1 = require("../useCases/PlaceOrder");
const Registry_1 = require("./Registry");
exports.container = Registry_1.Registry.getInstance();
exports.container.register("PlaceOrder", PlaceOrder_1.PlaceOrder);
exports.container.register("OrderRepository", DynamoDbRepository_1.DynamoDBRepository);
exports.container.register("EmailGateway", SESGateway_1.SESGateway);
exports.container.register("QueuGateway", SQSGateway_1.SQSGateway);

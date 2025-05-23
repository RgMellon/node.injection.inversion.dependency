"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const SESGateway_1 = require("../gateways/SESGateway");
const SQSGateway_1 = require("../gateways/SQSGateway");
const DynamoDbRepository_1 = require("../repository/DynamoDbRepository");
const Registry_1 = require("./Registry");
exports.container = Registry_1.Registry.getInstance();
exports.container.register(DynamoDbRepository_1.DynamoDBRepository);
exports.container.register(SESGateway_1.SESGateway);
exports.container.register(SQSGateway_1.SQSGateway);

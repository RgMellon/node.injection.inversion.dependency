"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const PlaceOrder_1 = require("./useCases/PlaceOrder");
const DynamoDbRepository_1 = require("./repository/DynamoDbRepository");
const SQSGateway_1 = require("./gateways/SQSGateway");
const SESGateway_1 = require("./gateways/SESGateway");
const app = (0, fastify_1.default)();
app.post("/checkout", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const dynamoRepository = new DynamoDbRepository_1.DynamoDBRepository();
    const sqsGateway = new SQSGateway_1.SQSGateway();
    const sesGateway = new SESGateway_1.SESGateway();
    const placeOrder = new PlaceOrder_1.PlaceOrder(dynamoRepository, sqsGateway, sesGateway);
    const { orderId } = yield placeOrder.execute();
    reply.status(201).send({ orderId });
}));
app.listen({ port: 3000 }).then(() => {
    console.log("Listen on port 3000");
});

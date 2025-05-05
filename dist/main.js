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
const makeDynamoRepository_1 = require("./factories/makeDynamoRepository");
const makeSqsGateway_1 = require("./factories/makeSqsGateway");
const makeSesGateway_1 = require("./factories/makeSesGateway");
const app = (0, fastify_1.default)();
app.post("/checkout", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const dynamoRepository = (0, makeDynamoRepository_1.makeDynamoRepository)();
    const sqsGateway = (0, makeSqsGateway_1.makeSqsGateway)();
    const sesGateway = (0, makeSesGateway_1.makeSesGateway)();
    const placeOrder = new PlaceOrder_1.PlaceOrder(dynamoRepository, sqsGateway, sesGateway);
    const { orderId } = yield placeOrder.execute();
    reply.status(201).send({ orderId });
}));
app.listen({ port: 3000 }).then(() => {
    console.log("Listen on port 3000");
});

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceOrder = void 0;
const Order_1 = require("../entity/Order");
class PlaceOrder {
    constructor(orderRepository, queuGateway, emailGateway) {
        this.orderRepository = orderRepository;
        this.queuGateway = queuGateway;
        this.emailGateway = emailGateway;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const customerEmail = "rgmelo94@gmail.com";
            const amount = Math.ceil(Math.random() * 1000);
            const order = new Order_1.Order(customerEmail, amount);
            yield this.orderRepository.create(order);
            yield this.queuGateway.sendMessage({ orderId: order.id });
            this.emailGateway.sendEmail(customerEmail);
            return {
                orderId: order.id,
            };
        });
    }
}
exports.PlaceOrder = PlaceOrder;

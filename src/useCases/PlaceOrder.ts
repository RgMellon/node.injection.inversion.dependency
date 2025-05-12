import { Inject } from "../di/Inject";
import { Injectable } from "../di/Injectable";
import { Order } from "../entity/Order";
import { IOrderRepository } from "../interfaces/entities/IOrderRepository";
import { IEmailGateway } from "../interfaces/gateways/IEmailGateway";
import { IQueuGateway } from "../interfaces/gateways/IQueueGateway";

@Injectable()
export class PlaceOrder {
    constructor(
        @Inject("OrderRepository")
        private readonly orderRepository: IOrderRepository,
        @Inject("QueuGateway")
        private readonly queuGateway: IQueuGateway,
        @Inject("EmailGateway")
        private readonly emailGateway: IEmailGateway
    ) {}
    async execute() {
        const customerEmail = "rgmelo94@gmail.com";
        const amount = Math.ceil(Math.random() * 1000);
        const order = new Order(customerEmail, amount);

        await this.orderRepository.create(order);
        await this.queuGateway.sendMessage({ orderId: order.id });
        this.emailGateway.sendEmail(customerEmail);

        return {
            orderId: order.id,
        };
    }
}

import { Order } from "../entity/Order";
import { DynamoDBRepository } from "../repository/DynamoDbRepository";
import { SQSGateway } from "../gateways/SQSGateway";
import { SESGateway } from "../gateways/SESGateway";

export class PlaceOrder {
    constructor(
        private readonly dynamoRepository: DynamoDBRepository,
        private readonly sqsGateway: SQSGateway,
        private readonly sesGateway: SESGateway
    ) {}
    async execute() {
        const customerEmail = "rgmelo94@gmail.com";
        const amount = Math.ceil(Math.random() * 1000);
        const order = new Order(customerEmail, amount);

        await this.dynamoRepository.create(order);
        await this.sqsGateway.sendMessage({ orderId: order.id });
        this.sesGateway.sendEmail(customerEmail);

        return {
            orderId: order.id,
        };
    }
}

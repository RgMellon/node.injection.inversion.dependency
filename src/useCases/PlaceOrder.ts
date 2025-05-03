import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "node:crypto";
import { Order } from "../entity/Order";
import { DynamoDBRepository } from "../repository/DynamoDbRepository";
import { SQSGateway } from "../gateways/SQSGateway";
import { SESGateway } from "../gateways/SESGateway";

export class PlaceOrder {
    async execute() {
        const customerEmail = "rgmelo94@gmail.com";
        const amount = Math.ceil(Math.random() * 1000);
        const order = new Order(customerEmail, amount);

        const dynamoRepository = new DynamoDBRepository();
        const sqsGateway = new SQSGateway();
        const sesGateway = new SESGateway();

        await dynamoRepository.create(order);
        await sqsGateway.sendMessage({ orderId: order.id });
        sesGateway.sendEmail(customerEmail);

        return {
            orderId: order.id,
        };
    }
}

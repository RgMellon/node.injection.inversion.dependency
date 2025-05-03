import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "node:crypto";
import { Order } from "../entity/Order";

export class PlaceOrder {
    async execute() {
        const customerEmail = "rgmelo94@gmail.com";
        const amount = Math.ceil(Math.random() * 1000);
        const order = new Order(customerEmail, amount);

        const ddbClient = DynamoDBDocumentClient.from(
            new DynamoDBClient({
                region: "us-east-1",
            })
        );

        const putItemCommand = new PutCommand({
            TableName: "Orders",
            Item: order,
        });

        await ddbClient.send(putItemCommand);

        const sqsClient = new SQSClient({ region: "us-east-1" });
        const sendMessageCommand = new SendMessageCommand({
            QueueUrl:
                "https://sqs.us-east-1.amazonaws.com/445720700848/ProcessPaymentQueue",
            MessageBody: JSON.stringify({ orderId: order.id }),
        });

        await sqsClient.send(sendMessageCommand);

        console.log({
            sendEmailTo: customerEmail,
        });

        return {
            orderId: order.id,
        };
    }
}

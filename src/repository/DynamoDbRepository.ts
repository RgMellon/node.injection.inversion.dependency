import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { Order } from "../entity/Order";
import { IOrderRepository } from "../interfaces/entities/IOrderRepository";

export class DynamoDBRepository implements IOrderRepository {
    private client = DynamoDBDocumentClient.from(
        new DynamoDBClient({
            region: "us-east-1",
        })
    );

    async create(order: Order) {
        const command = new PutCommand({
            TableName: "Orders",
            Item: order,
        });

        await this.client.send(command);
    }
}

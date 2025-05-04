import fastify from "fastify";
import { PlaceOrder } from "./useCases/PlaceOrder";
import { DynamoDBRepository } from "./repository/DynamoDbRepository";
import { SQSGateway } from "./gateways/SQSGateway";
import { SESGateway } from "./gateways/SESGateway";

const app = fastify();

app.post("/checkout", async (request, reply) => {
    const dynamoRepository = new DynamoDBRepository();
    const sqsGateway = new SQSGateway();
    const sesGateway = new SESGateway();

    const placeOrder = new PlaceOrder(dynamoRepository, sqsGateway, sesGateway);
    const { orderId } = await placeOrder.execute();

    reply.status(201).send({ orderId });
});

app.listen({ port: 3000 }).then(() => {
    console.log("Listen on port 3000");
});

import fastify from "fastify";
import { makePlaceOrder } from "./factories/makePlaceOrder";
import { PlaceOrder } from "./useCases/PlaceOrder";
import { container } from "./registry/container";
import { DynamoDBRepository } from "./repository/DynamoDbRepository";
import { SQSGateway } from "./gateways/SQSGateway";
import { SESGateway } from "./gateways/SESGateway";

const app = fastify();

app.post("/checkout", async (request, reply) => {
    const placeOrder = new PlaceOrder(
        container.resolve(DynamoDBRepository),
        container.resolve(SQSGateway),
        container.resolve(SESGateway)
    );

    const { orderId } = await placeOrder.execute();

    reply.status(201).send({ orderId });
});

app.listen({ port: 3000 }).then(() => {
    console.log("Listen on port 3000");
});

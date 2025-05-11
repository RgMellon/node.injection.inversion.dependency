import "reflect-metadata";

import fastify from "fastify";
import { PlaceOrder } from "./useCases/PlaceOrder";
// import { DynamoDBRepository } from "./repository/DynamoDbRepository";
// import { SQSGateway } from "./gateways/SQSGateway";
// import { SESGateway } from "./gateways/SESGateway";
import { Registry } from "./registry/Registry";

const app = fastify();

app.post("/checkout", async (request, reply) => {
    // const container = Registry.getInstance();

    const placeOrder = Registry.getInstance().resolve(PlaceOrder);

    const { orderId } = await placeOrder.execute();

    reply.status(201).send({ orderId });
});

app.listen({ port: 3000 }).then(() => {
    console.log("Listen on port 3000");
});

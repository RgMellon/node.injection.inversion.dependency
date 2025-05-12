import "reflect-metadata";

import fastify from "fastify";
import { PlaceOrder } from "./useCases/PlaceOrder";
import { container } from "./di/container";
const app = fastify();

app.post("/checkout", async (request, reply) => {
    const placeOrder = container.resolve<PlaceOrder>("PlaceOrder");

    const { orderId } = await placeOrder.execute();

    reply.status(201).send({ orderId });
});

app.listen({ port: 3000 }).then(() => {
    console.log("Listen on port 3000");
});

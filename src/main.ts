import fastify from "fastify";
import { makePlaceOrder } from "./factories/makePlaceOrder";

const app = fastify();

app.post("/checkout", async (request, reply) => {
    const placeOrder = makePlaceOrder();
    const { orderId } = await placeOrder.execute();

    reply.status(201).send({ orderId });
});

app.listen({ port: 3000 }).then(() => {
    console.log("Listen on port 3000");
});

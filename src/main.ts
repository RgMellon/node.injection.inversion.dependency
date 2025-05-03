import fastify from "fastify";

const app = fastify();

app.post("/checkout", () => {
    return {
        hello: "oie",
    };
});

app.listen({ port: 3000 }).then(() => {
    console.log("Listen on port 3000");
});

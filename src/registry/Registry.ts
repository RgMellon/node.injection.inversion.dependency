import { SQSClient } from "@aws-sdk/client-sqs";
import { PlaceOrder } from "../useCases/PlaceOrder";

type Constructor<T> = new (...args: any[]) => T;
export class Registry {
    private readonly services: Map<string, Constructor<any>> = new Map();

    register<T>(implementation: Constructor<T>) {
        const token = implementation.name;

        if (this.services.has(token)) {
            throw new Error(`${token} aleready registred`);
        }

        this.services.set(token, implementation);
    }
}

const r = new Registry();
r.register(PlaceOrder);

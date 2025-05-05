import { SQSGateway } from "../gateways/SQSGateway";

export function makeSqsGateway() {
    return new SQSGateway();
}

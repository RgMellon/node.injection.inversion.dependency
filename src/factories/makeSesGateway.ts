import { SESGateway } from "../gateways/SESGateway";

export function makeSesGateway() {
    return new SESGateway();
}

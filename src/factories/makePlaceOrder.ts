import { PlaceOrder } from "../useCases/PlaceOrder";
import { makeDynamoRepository } from "./makeDynamoRepository";
import { makeSesGateway } from "./makeSesGateway";
import { makeSqsGateway } from "./makeSqsGateway";

export function makePlaceOrder() {
    return new PlaceOrder(
        makeDynamoRepository(),
        makeSqsGateway(),
        makeSesGateway()
    );
}

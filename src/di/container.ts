import { SESGateway } from "../gateways/SESGateway";
import { SQSGateway } from "../gateways/SQSGateway";
import { DynamoDBRepository } from "../repository/DynamoDbRepository";
import { PlaceOrder } from "../useCases/PlaceOrder";
import { Registry } from "./Registry";

export const container = Registry.getInstance();

container.register("PlaceOrder", PlaceOrder);
container.register("OrderRepository", DynamoDBRepository);
container.register("EmailGateway", SESGateway);
container.register("QueuGateway", SQSGateway);

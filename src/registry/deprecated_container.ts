import { SESGateway } from "../gateways/SESGateway";
import { SQSGateway } from "../gateways/SQSGateway";
import { DynamoDBRepository } from "../repository/DynamoDbRepository";
import { Registry } from "./deprecated_Registry";

export const container = Registry.getInstance();

container.register(DynamoDBRepository);
container.register(SESGateway);
container.register(SQSGateway);

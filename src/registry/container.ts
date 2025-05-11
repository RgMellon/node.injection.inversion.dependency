import { deprecate } from "util";
import { SESGateway } from "../gateways/SESGateway";
import { SQSGateway } from "../gateways/SQSGateway";
import { DynamoDBRepository } from "../repository/DynamoDbRepository";
import { Registry } from "./Registry";

export const container = Registry.getInstance();

container.register(DynamoDBRepository);
container.register(SESGateway);
container.register(SQSGateway);

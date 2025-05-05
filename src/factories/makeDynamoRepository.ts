import { DynamoDBRepository } from "../repository/DynamoDbRepository";

export function makeDynamoRepository() {
    return new DynamoDBRepository();
}

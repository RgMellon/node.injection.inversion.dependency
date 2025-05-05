"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDynamoRepository = makeDynamoRepository;
const DynamoDbRepository_1 = require("../repository/DynamoDbRepository");
function makeDynamoRepository() {
    return new DynamoDbRepository_1.DynamoDBRepository();
}

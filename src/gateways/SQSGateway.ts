import { SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";
import { IQueuGateway } from "../interfaces/gateways/IQueueGateway";
import { Injectable } from "../di/Injectable";

@Injectable()
export class SQSGateway implements IQueuGateway {
    private client = new SQSClient({ region: "us-east-1" });

    async sendMessage(message: Record<string, unknown>) {
        const sendMessageCommand = new SendMessageCommand({
            QueueUrl:
                "https://sqs.us-east-1.amazonaws.com/445720700848/ProcessPaymentQueue",
            MessageBody: JSON.stringify(message),
        });

        await this.client.send(sendMessageCommand);
    }
}

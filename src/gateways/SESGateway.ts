import { Injectable } from "../di/Injectable";
import { IEmailGateway } from "../interfaces/gateways/IEmailGateway";

@Injectable()
export class SESGateway implements IEmailGateway {
    sendEmail(sendTo: string) {
        console.log({
            sendEmailTo: sendTo,
        });
    }
}

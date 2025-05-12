import { IEmailGateway } from "../interfaces/gateways/IEmailGateway";

export class SESGateway implements IEmailGateway {
    sendEmail(sendTo: string) {
        console.log({
            sendEmailTo: sendTo,
        });
    }
}

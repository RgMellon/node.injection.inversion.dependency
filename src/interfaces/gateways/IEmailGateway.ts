export interface IEmailGateway {
    sendEmail(sendTo: string): void;
}

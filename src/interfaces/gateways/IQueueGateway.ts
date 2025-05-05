export interface IQueuGateway {
    sendMessage(message: Record<string, unknown>): Promise<void>;
}

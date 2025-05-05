import { Order } from "../../entity/Order";

export interface IOrderRepository {
    create(order: Order): Promise<void>;
}

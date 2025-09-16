import { OrderStatus } from "src/enums/orderStatus";
import { Order } from "./order";

export type OrderProdAddModel = Pick<Order, 'id'> & { quantity: number}

export type OrderAddModel =
{
    products: OrderProdAddModel[],
    status?: OrderStatus
}


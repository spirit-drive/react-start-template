import { OrderAddModel } from "./addOrder";

export type OrderUpdateModel = { id: string } &
    Partial<OrderAddModel>
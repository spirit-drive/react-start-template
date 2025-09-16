import { User } from "../user";
import { OrderProduct } from "./orderProduct";
import { OrderStatus } from "../../enums/orderStatus"

export type Order = {
  id: string;
  products: OrderProduct[];
  user: User;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
  commandId: string;
};
import { Model } from "mongoose";

export type TOrder = {
  id: string;
  email: string;
  productId: string;
  price: number;
  quantity: number;
};

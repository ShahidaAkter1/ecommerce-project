import { Schema, model } from 'mongoose';
import { TOrder } from './orders.interface';

const orderSchema = new Schema<TOrder>({
  id: { type: String, required: true },
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const Order = model<TOrder>('Order', orderSchema);

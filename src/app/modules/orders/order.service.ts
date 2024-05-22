import { Product } from '../products/products.model';
import { Order } from './order.model';
import { TOrder } from './orders.interface';

//create orders
const createOrdersIntoDB = async (order: TOrder) => {
  // console.log(order);
  const { productId, quantity } = order;

  const product = await Product.findById(productId);
  // console.log(product?.inventory.quantity,quantity);
  const previousQuantity = product?.inventory.quantity;

  if (quantity < previousQuantity || quantity === previousQuantity) {
    await Product.updateOne(
      { _id: productId },
      {
        $inc: { 'inventory.quantity': -order.quantity },
      },
    );
  }

  const productNew = await Product.findById(productId);
  // console.log(product?.inventory.quantity,quantity);
  const newQuantity = productNew?.inventory.quantity;

  if (newQuantity === 0) {
    await Product.updateOne(
      { _id: productId },
      {
        $set: { 'inventory.inStock': false },
      },
    );
  }

  // console.log(productId);

  const returnResult = await Order.create(order);

  return [returnResult, previousQuantity, quantity];
};

// //get all orders
const getAllOrdersFromDB = async (email: string) => {
  // console.log(email);

  if (email === 'all') {
    const result = await Order.find();
    return result;
  } else {
    const result = await Order.find({ email });
    return result;
  }
};

export const OrdersServices = {
  createOrdersIntoDB,
  getAllOrdersFromDB,
};

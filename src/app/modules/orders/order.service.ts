import { Order } from "./order.model";
import { TOrder } from "./orders.interface";

 


//create orders
const createOrdersIntoDB=async (order:TOrder)=>{
    const result=await Order.create(order);
    return result;
}

// //get all orders
const getAllOrdersFromDB=async()=>{
    const result=await Order.find();
    return result;
}

 

 

 

export const OrdersServices={
  createOrdersIntoDB,
  getAllOrdersFromDB,


     

}
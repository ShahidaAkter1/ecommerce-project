import { Order } from "./order.model";
import { TOrder } from "./orders.interface";

 


//create orders
const createOrdersIntoDB=async (order:TOrder)=>{
    const result=await Order.create(order);
    return result;
}

// //get all orders
const getAllOrdersFromDB=async(email: string)=>{
console.log(email);


  if(email==='all'){
    const result=await Order.find();
    return result;
  }
  else{
    const result=await Order.findOne( {email});
    return result;
  }

  

    // const result=await Order.find();
    // return result;
}

 

 

 

export const OrdersServices={
  createOrdersIntoDB,
  getAllOrdersFromDB,


     

}
import { Request, Response } from "express";
import { OrderValidationSchema } from "./orders.validation";
import { OrdersServices } from "./order.service";
 
 

//add products
const createOrders = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    // console.log(orderData);
    

    const zodParseData = OrderValidationSchema.parse(orderData);

    const result = await OrdersServices.createOrdersIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: "order added successfully",
      data: result,
    });
  } catch (error:any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || " something wrong        ",
      error: error,
    });
  }
};

//get all products
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await  OrdersServices.getAllOrdersFromDB();

    res.status(200).json({
      success: true,
      message: " All Orders retrieved successfully",
      data: result,
    });
  } catch (error:any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || " something wrong        ",
      error: error,
    });
  }
};

 
//export all
export const OrdersController = {
   createOrders,
   getAllOrders
 
};

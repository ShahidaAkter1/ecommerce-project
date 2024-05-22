import { Request, Response } from 'express';
import { OrderValidationSchema } from './orders.validation';
import { OrdersServices } from './order.service';

//add products
const createOrders = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    // console.log(orderData);

    const zodParseData = OrderValidationSchema.parse(orderData);

    const result = await OrdersServices.createOrdersIntoDB(zodParseData);

    const [returnResult, previousQuantity, quantity] = result;
    // console.log( previousQuantity,quantity);

    if (quantity > previousQuantity) {
      res.status(400).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'order added successfully',
        data: returnResult,
      });
    }
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || ' something wrong        ',
      error: error,
    });
  }
};

//get all products and by email
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    // console.log(email);

    if (email) {
      if (typeof email === 'string') {
        const result = await OrdersServices.getAllOrdersFromDB(email);

        if (result === null) {
          res.status(500).json({
            success: false,
            message: `no orders found by using this email ${email}`,
            data: result,
          });
        } else {
          res.status(200).json({
            success: true,
            message: `Orders fetched successfully for user email! : ${email}`,
            data: result,
          });
        }
      } else {
        res.status(400).json({ message: 'Invalid email query parameter' });
      }
    } else {
      const result = await OrdersServices.getAllOrdersFromDB('all');
      res.status(200).json({
        success: true,
        message: ' All Orders retrieved successfully',
        data: result,
      });
    }
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || ' something wrong        ',
      error: error,
    });
  }
};

//export all
export const OrdersController = {
  createOrders,
  getAllOrders,
};

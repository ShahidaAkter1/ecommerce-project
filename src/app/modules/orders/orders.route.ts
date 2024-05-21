import express from "express";
import { OrdersController } from "./order.controller";
 



const router=express.Router();

router.post('/orders', OrdersController.createOrders)
router.get('/orders', OrdersController.getAllOrders)
 


export const  OrderRoutes=router;
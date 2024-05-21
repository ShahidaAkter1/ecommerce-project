import express from "express";
import { ProductsController } from "./products.controller";



const router=express.Router();

router.post('/products',ProductsController.createProducts)


export const ProductsRoutes=router;
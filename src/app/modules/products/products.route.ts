import express from "express";
import { ProductsController } from "./products.controller";



const router=express.Router();

router.post('/products',ProductsController.createProducts)

router.get('/products',ProductsController.getAllProducts)

router.get('/products/:proID',ProductsController.getSingleProducts)


export const ProductsRoutes=router;
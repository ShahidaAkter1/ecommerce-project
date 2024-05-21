import { Request, Response } from "express";
import { ProductsServices } from "./products.service";


const createProducts=async (req:Request,res:Response)=>{
    try {
        const {product : productData}=req.body;

        const result=await ProductsServices.createProductsIntoDB(productData);

        res.status(200).json({
            success:true,
            message:'products added successfully',
            data:result
        })
    } catch (error) {
        console.log(error);
        
    }
}


export const ProductsController={
    createProducts,
    
}
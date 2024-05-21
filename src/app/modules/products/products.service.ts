import { TProduct } from "./products.interface";
import { Product } from "./products.model";



const createProductsIntoDB=async (product:TProduct)=>{
    const result=await Product.create(product);
    return result;
}


export const ProductsServices={
    createProductsIntoDB,
    
}
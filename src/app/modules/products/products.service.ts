import { TProduct } from "./products.interface";
import { Product } from "./products.model";


//create products
const createProductsIntoDB=async (product:TProduct)=>{
    const result=await Product.create(product);
    return result;
}

//get all products
const getAllProductsFromDB=async()=>{
    const result=await Product.find();
    return result;
}

//get single products
const getSingleProductsFromDB=async(productsID:string )=>{
    const result=await Product.find( {id:productsID});
    return result;
}


export const ProductsServices={
    createProductsIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,


}
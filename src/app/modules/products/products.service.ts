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
    const result=await Product.findOne( {_id:productsID});
    console.log(result);
    
    return result;
}

//delete single products
const deleteSingleProductsFromDB = async (proID: string) => {
      const result = await Product.deleteOne({ id: proID });
    // const result =await Student.aggregate([
    //     {$match:{id:stuID}}
    // ])
    // console.log(result);
    
      return result;
    };


    //search products by text
    const searchProductsFromDB=async(searchText:string )=>{
        console.log(searchText);
        
        // const result=await Product.findOne( {
        //     tags: { $regex: searchText, $options: "i" },
        // });
        const result=await Product.find( {
             searchText
        });
        console.log(result);
        
        return result;
    }

export const ProductsServices={
    createProductsIntoDB,
    getAllProductsFromDB,
    getSingleProductsFromDB,
    deleteSingleProductsFromDB,
    searchProductsFromDB,


}
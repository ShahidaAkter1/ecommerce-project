import { TProduct } from "./products.interface";
import { Product } from "./products.model";

//create products
const createProductsIntoDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

//get all products and search product based on name field
const getAllProductsFromDB = async (searchTerm: string) => {
  // console.log(searchTerm);
  if (searchTerm === "all") {
    const result = await Product.find();
    return result;
  } else {
    const result = await Product.find({
      name: {
        $regex: searchTerm,
        $options: "i",
      },
    });
    return result;
  }
};

//get single products
const getSingleProductsFromDB = async (productsID: string) => {
  const result = await Product.findOne({ _id: productsID });
  // console.log(result);
  return result;
};

//delete single products
const deleteSingleProductsFromDB = async (proID: string) => {
  const result = await Product.deleteOne({ id: proID });
  return result;
};

export const ProductsServices = {
  createProductsIntoDB,
  getAllProductsFromDB,
  getSingleProductsFromDB,
  deleteSingleProductsFromDB,
};

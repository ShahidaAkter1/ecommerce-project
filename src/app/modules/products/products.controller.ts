import { Request, Response } from "express";
import { ProductsServices } from "./products.service";
import { ProductValidationSchema } from "./products.validation.zod";


//add products
const createProducts = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    const zodParseData=ProductValidationSchema.parse(productData);

    const result = await ProductsServices.createProductsIntoDB(productData);

    res.status(200).json({
      success: true,
      message: "products added successfully",
      data: result,
    });
  } catch (error:any) {
    console.log(error);
    res.status(500).json({
        success: false,
        message: error.message || " something wrong        ",
         error:error,
      });
  }
};


//get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductsServices.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: " All products retrieved successfully",
      data: result,
    });
  } catch (error:any) {
    console.log(error);
    res.status(500).json({
        success: false,
        message: error.message || " something wrong        ",
         error:error,
      });
  }
};


//get single products
const getSingleProducts = async (req: Request, res: Response) => {
    try {
      const { proID } = req.params;
      const result = await ProductsServices.getSingleProductsFromDB(proID);
      res.status(200).json({
        success: true,
        message: " specific products get   successfully",
        data: result,
      });
    } catch (error) {
      // console.log(error);
      res.status(500).json({
        success: false,
        message: " something went wrong",
        error: error,
      });
    }
  };


//export all
export const ProductsController = {
  createProducts,
  getAllProducts,
  getSingleProducts,



};

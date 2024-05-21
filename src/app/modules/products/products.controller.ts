import { Request, Response } from "express";
import { ProductsServices } from "./products.service";
import { ProductValidationSchema } from "./products.validation.zod";

//add products
const createProducts = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    const zodParseData = ProductValidationSchema.parse(productData);

    const result = await ProductsServices.createProductsIntoDB(zodParseData);

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
      error: error,
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
      error: error,
    });
  }
};

//get single products
const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const { proID } = req.params;
    const result = await ProductsServices.getSingleProductsFromDB(proID);

    if (result === null) {
      res.status(200).json({
        success: true,
        message: "no products found",
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: " specific products get   successfully",
        data: result,
      });
    }
  } catch (error:any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: " something went wrong",
      error: error,
    });
  }
};

//delete single products
const deleteSingleProducts = async (req: Request, res: Response) => {
  try {
    const { proID } = req.params;
    const result = await ProductsServices.deleteSingleProductsFromDB(proID);
    console.log(result);
    if (result.deletedCount === 1) {
      res.status(200).json({
        success: true,
        message: "  product deleted  successfully",
      });
    }
  } catch (error:any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: " something went wrong",
      error: error,
    });
  }
};

//search products
//get single products
const searchProducts = async (req: Request, res: Response) => {
    try {
      const srcText  = req.query.searchText as string;
      console.log(srcText);
      
      const result = await ProductsServices.searchProductsFromDB(srcText);

    //   const searchText: string = req.query.searchText as string; // Assuming searchText is a string
    //   const result = await ProductsServices.searchProductsFromDB(searchText);
  
      if (result === null) {
        res.status(200).json({
          success: true,
          message: "no products  found in search",
          data: result,
        });
      } else {
        res.status(200).json({
          success: true,
          message: " search products get   successfully",
          data: result,
        });
      }
    } catch (error:any) {
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
  deleteSingleProducts,
  searchProducts
};

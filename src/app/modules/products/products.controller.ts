import { Request, Response } from 'express';
import { ProductsServices } from './products.service';
import { ProductValidationSchema } from './products.validation.zod';
 

//add products
const createProducts = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    const zodParseData = ProductValidationSchema.parse(productData);

    const result = await ProductsServices.createProductsIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'products added successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || ' something wrong        ',
      error: error,
    });
  }
};

//get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    // console.log(email);

    if (searchTerm) {
      if (typeof searchTerm === 'string') {
        const result = await ProductsServices.getAllProductsFromDB(searchTerm);

        if (result === null) {
          res.status(500).json({
            success: false,
            message: `no products found by using this search term ${searchTerm}`,
            data: result,
          });
        } else {
          res.status(200).json({
            success: true,
            message: `Products fetched successfully using search term   ! : ${searchTerm}`,
            data: result,
          });
        }
      } else {
        res.status(400).json({ message: 'Invalid search term query parameter' });
      }
    } else {
      const result = await ProductsServices.getAllProductsFromDB('all');
      res.status(200).json({
        success: true,
        message: ' All products retrieved successfully',
        data: result,
      });
    }
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || ' something wrong        ',
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
        message: 'no products found',
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: ' specific products get   successfully',
        data: result,
      });
    }
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: ' something went wrong',
      error: error,
    });
  }
};

//delete single products
const deleteSingleProducts = async (req: Request, res: Response) => {
  try {
    const { proID } = req.params;
    const result = await ProductsServices.deleteSingleProductsFromDB(proID);
    // console.log(result);
    if (result.deletedCount === 1) {
      res.status(200).json({
        success: true,
        message: '  product deleted  successfully',
      });
    }
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: ' something went wrong',
      error: error,
    });
  }
};


//update single products
const updateSingleProducts = async (req: Request, res: Response) => {
  try {
    const { proID } = req.params;
    const { product: productData } = req.body;

    const zodParseData = ProductValidationSchema.parse(productData);
 
    const result = await ProductsServices.updateSingleProductsFromDB(proID,zodParseData);

    if (result === null) {
      res.status(200).json({
        success: true,
        message: 'no products found',
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: '  updated products   successfully',
        data: result,
      });
    }
  } catch (error: any) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: ' something went wrong',
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
  updateSingleProducts,
};

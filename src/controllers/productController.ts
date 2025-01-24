import { NextFunction, Request, Response } from 'express';
import { productService } from '../services/productService';
import { getPagination } from '../utils/pagination';
import upload from '../config/multerConfig';
import { MulterError } from 'multer';

export const productController = {
  async getAllProducts(req: Request, res: Response) {
    const { page, limit, offset } = getPagination(req.query);
    const filters = { ...req.query, page: undefined, limit: undefined };

    const result = await productService.getAllProducts(offset, limit, filters);
    res.json({
      currentPage: page,
      totalPages: Math.ceil(result.total / limit),
      totalProducts: result.total,
      products: result.products,
    });
  },

  async getProductById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const product = await productService.getProductById(Number(id));
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.json(product);
      }
    } catch (error) {
      next(error);
    }
  },  

  // async createProduct(req: Request, res: Response) {
  //   const newProduct = await productService.createProduct(req.body);
  //   res.status(201).json(newProduct);
  // },

  async createProduct(req: Request, res: Response, next: NextFunction) {
    upload.single('image')(req, res, async (err: MulterError | any) => {
      if (err) {
        return res.status(400).json({ message: 'Error uploading file', error: err.message });
      }

      try {
        const newProductData = {
          ...req.body,
          imageUrl: req.file ? req.file.path : null,
        };

        const newProduct = await productService.createProduct(newProductData);
        res.status(201).json(newProduct);
      } catch (error: any) { // Type error as any
        res.status(500).json({ message: 'Error creating product', error: error.message });
      }
    });
  },

  async updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    const updatedProduct = await productService.updateProduct(Number(id), req.body);
    res.json(updatedProduct);
  },

  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    const result = await productService.deleteProduct(Number(id));
    res.json(result);
  },
};
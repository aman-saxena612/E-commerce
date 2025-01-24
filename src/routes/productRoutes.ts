import { Router } from 'express';
import { productController } from '../controllers/productController';
import { validateRequest } from '../middlewares/validateRequest';
import { createProductSchema, updateProductSchema } from '../validators/productValidator';

const router = Router();

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', validateRequest(createProductSchema), productController.createProduct);
router.put('/products/:id', validateRequest(updateProductSchema), productController.updateProduct);
// router.post('/products', productController.createProduct);
// router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

export default router;
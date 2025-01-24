import { AppDataSource } from '../config/db';
import { getRepository } from 'typeorm';
import { Product } from '../models/Product';
import { Category } from '../models/Category';

export const productService = {
  async getAllProducts(offset: number, limit: number, filters: any) {
    const queryBuilder = AppDataSource.getRepository(Product).createQueryBuilder('product');

    if (filters.tag) {
      queryBuilder.andWhere('product.tag = :tag', { tag: filters.tag });
    }

    if (filters.minPrice) {
      queryBuilder.andWhere('product.price >= :minPrice', { minPrice: filters.minPrice });
    }

    if (filters.maxPrice) {
      queryBuilder.andWhere('product.price <= :maxPrice', { maxPrice: filters.maxPrice });
    }

    if (filters.name) {
      queryBuilder.andWhere('product.name ILIKE :name', { name: `%${filters.name}%` });
    }

    const [products, total] = await queryBuilder
      .take(limit)
      .skip(offset)
      .getManyAndCount();

    return { products, total };
  },

  async getProductById(id: number) {
    return AppDataSource.getRepository(Product).findOne({ where: { id } });
  },

  async createProduct(data: Partial<Product>) {
    const productRepo = AppDataSource.getRepository(Product);
    const newProduct = productRepo.create(data);
    return productRepo.save(newProduct);
  },

  async updateProduct(id: number, data: Partial<Product>) {
    const productRepo = AppDataSource.getRepository(Product);
    await productRepo.update(id, data);
    return productRepo.findOne({ where: { id } });
  },

  async deleteProduct(id: number) {
    const productRepo = AppDataSource.getRepository(Product);
    await productRepo.delete(id);
    return { message: 'Product deleted successfully' };
  },
};
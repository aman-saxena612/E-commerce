import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Product } from '../models/Product';
import { Category } from '../models/Category';

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Product, Category]
});

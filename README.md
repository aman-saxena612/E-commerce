# eCommerce API

This is a RESTful API for an eCommerce application built with **Node.js**, **Express.js**, **TypeScript**, and **PostgreSQL**. It provides functionality to manage products, categories, and user-related operations. The project includes features like file upload for product images using **Multer**.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)

## Features

- **Product Management**: Add, update, delete, and fetch products.
- **Product Search**: Search products by name and apply filters for price range and product tag.
- **File Upload**: Upload product images using **Multer**.
- **Pagination**: Supports pagination for fetching products.
- **Validation**: Request validation using **Joi** to ensure correct input data.

## Tech Stack

- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Web framework for handling HTTP requests.
- **TypeScript**: Strongly typed language for better code quality and error prevention.
- **PostgreSQL**: Relational database management system.
- **Multer**: Middleware for handling file uploads.
- **Joi**: Validation library for input data.

## Installation

### Prerequisites

1. **Node.js**: Ensure you have **Node.js** installed. You can download it from [here](https://nodejs.org/).
2. **PostgreSQL**: Make sure you have **PostgreSQL** installed and running. You can install it from [here](https://www.postgresql.org/download/).

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/e-commerce.git
   ```

2. Install dependencies:

   ```bash
   cd ecommerce-jumbo
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root of the project.
   - Define the required variables such as:

     ```
     PORT=8001
     DB_USERNAME=your_DB_username
     DB_PASSWORD=your_DB_password
     DB_NAME=your_DB_name
     DB_HOST=you_BD_host
     ```

4. Start the server:

   ```bash
   npm run dev
   ```

## Environment Variables

- **DATABASE_URL**: The connection string to your PostgreSQL database.

## API Documentation

### Products

- **GET** `/products`: Fetch all products with optional pagination and filters (name, tag, price range).
  - Query params:
    - `page`: Page number (default: 1)
    - `limit`: Number of items per page (default: 10)
    - `tag`: Filter by product tag
    - `minPrice`: Minimum price
    - `maxPrice`: Maximum price
    - `name`: Partial product name to search
   
![Screenshot (11162)](https://github.com/user-attachments/assets/70e10d6c-b2f5-43a9-98f2-6f0a03431268)

![Screenshot (11163)](https://github.com/user-attachments/assets/15907bf8-8c0e-4ec7-8d77-210722b056d0)

**Search** functionality

![Screenshot (11171)](https://github.com/user-attachments/assets/c9535ce1-7446-4eb9-b602-f7ee07c8c684)

- **GET** `/products/:id`: Fetch product details by ID.

  ![Screenshot (11164)](https://github.com/user-attachments/assets/9ed08e12-ef0b-482a-a9e4-c1369e3fda7f)

- **POST** `/products`: Create a new product with an image.
  - Body:
    - `name`: Product name
    - `description`: Product description
    - `price`: Product price
    - `tag`: Product tag
    - `categoryId`: Category ID
    - `image`: (Multipart form data) Image file for the product


![Screenshot (11161)](https://github.com/user-attachments/assets/45a319bb-fb1c-4b9e-9f91-6b95ec06c32c)

- **PUT** `/products/:id`: Update a product by ID.

  ![Screenshot (11165)](https://github.com/user-attachments/assets/c3bffbd0-b660-42ee-92f9-222bb0dbd865)

  ![Screenshot (11166)](https://github.com/user-attachments/assets/5587b2ab-d8d2-4491-b43f-5c32c4972a87)

- **DELETE** `/products/:id`: Delete a product by ID.

  ![Screenshot (11167)](https://github.com/user-attachments/assets/cc761c7f-ed37-4a85-a808-21b839457a78)
  
  ![Screenshot (11168)](https://github.com/user-attachments/assets/bfdb70b0-798d-4bda-a4eb-7834b8de0992)

## File Upload
Product images are uploaded using **Multer**.

- The `image` field should be included in the `POST /products` request as **multipart/form-data**.

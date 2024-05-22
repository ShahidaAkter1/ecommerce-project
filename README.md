
# E-Commerce Crud Project

This project is a simple eCommerce application built with TypeScript, Express.js, and MongoDB using Mongoose. It provides CRUD (Create, Read, Update, Delete) functionality for managing products and orders.


## Features

-  Products Management: Create, read, update, and delete products with attributes like name, description, price, and quantity.
- Orders Management: Create, read, update, and delete orders with details like products, quantities, and customer information.
- Validation and Error Handling: Input validation and error handling to ensure data integrity and handle errors gracefully.
- Deployment: Deployment to a hosting platform with continuous integration and deployment (CI/CD) pipelines.
 


## Installation and Run the project

Clone the repositiry

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Set up environment variables:

```bash
NODE_ENV=development

PORT=5000

DATABASE_URL= mongodb+srv://ecommerce-project:36uyGeoheTKxtzLl@cluster0.843endu.mongodb.net/ecommerce-project?retryWrites=true&w=majority&appName=Cluster0
``` 

Start the server:

```bash
 npm run start:prod
```
Build the server:

```bash
 npm run  build
```
## API Reference

#### Get all products and also using searchTerm  

```http
  GET /api/products
  GET /api/products?searchTerm=iphone
```

 #### Get all  orders and  also using  email  

```http
  GET /api/orders
  GET /api/orders?email=level2@programming-hero.com

```


#### Get specific products and orders

```http
  GET /api/products/${id}
```

 ####  Create products and orders

```http
  POST /api/products
  POST /api/orders
```

 
 ####  Delete products by id 

```http
  DELETE /api/products/${id}

```

 ####  Update products by id 

```http
  PUT /api/products/${id}
```

 
## Contributing

Contributions are always welcome!

  Feel free to open issues or submit pull requests for any improvements or bug fixes.

 


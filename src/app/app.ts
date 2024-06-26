import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductsRoutes } from './modules/products/products.route';
import { OrderRoutes } from './modules/orders/orders.route';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());
app.use(express.text());

// application routes
app.use('/api', ProductsRoutes); //go which routes identify
app.use('/api', OrderRoutes); //go which routes identify

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'e-commerce crud app is running',
  });
});

export default app;

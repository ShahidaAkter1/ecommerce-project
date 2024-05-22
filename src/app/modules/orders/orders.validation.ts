import { z } from 'zod';

const orderSchemaZod = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

export const OrderValidationSchema = orderSchemaZod;

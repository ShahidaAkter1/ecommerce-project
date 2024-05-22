import { z } from 'zod';

// Define the Variant schema
const VariantSchema = z.object({
  type: z.string().nonempty(),
  value: z.string().nonempty(),
});

// Define the Inventory schema
const InventorySchema = z.object({
  quantity: z.number().int().positive(),
  inStock: z.boolean(),
});

// Define the Product schema
const ProductSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  price: z.number().positive(),
  category: z.string().nonempty(),
  tags: z.array(z.string().nonempty()),
  variants: z.array(VariantSchema),
  inventory: InventorySchema,
});

// Export the Product schema
export const ProductValidationSchema = ProductSchema;

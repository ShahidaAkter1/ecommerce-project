import { Schema, model } from 'mongoose';
import { TInventory, TProduct, TVariant } from './products.interface';

// Define the Variant schema
const VariantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

// Define the Inventory schema
const InventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// Define the TProduct schema
const productSchema = new Schema<TProduct>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [VariantSchema], required: true },
  inventory: { type: InventorySchema, required: true },
});

// Create and export the TProduct model
export const Product = model<TProduct>('Product', productSchema);

import mongoose from "mongoose";

const detailSchema = new mongoose.Schema({
  heading: String,
  content: String,
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true }, // ✅ ADD THIS LINE
  section: { type: String, required: true },
  classification: { type: String },
  formulation: { type: String },
  packing: { type: String },
  mrp: { type: String },
  image: { type: String },
  description: { type: String }, // ✅ also include this, since your data has it
  details: [detailSchema],
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

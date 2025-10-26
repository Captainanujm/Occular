// backend/models/Product.js
import mongoose from "mongoose";
const detailSchema = new mongoose.Schema({
  heading: String,
  content: String,
});
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  section: { type: String, required: true },           // e.g. "Eye / Ear Drops", "Tablet"
  classification: { type: String },                    // e.g. "Antibiotic", "Vitamins"
  formulation: { type: String },                       // e.g. "Topical", "Oral Liquid"
  packing: { type: String },
  mrp: { type: String },
  image: { type: String },    
  details:[detailSchema],                         // optional image url
});

export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
// backend/controllers/productController.js
import { Product } from "../models/Product.js";

// GET /api/products?section=...&classification=...
export const getProducts = async (req, res) => {
  try {
    const { section, classification, q } = req.query;
    const filter = {};
    if (section) filter.section = section;
    if (classification) filter.classification = classification;
    if (q) filter.name = { $regex: q, $options: "i" };

    const products = await Product.find(filter).sort({ name: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/products - add single product
export const addProduct = async (req, res) => {
  try {
    const p = new Product(req.body);
    const saved = await p.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET /api/sections - unique section names
export const getSections = async (req, res) => {
  try {
    const sections = await Product.distinct("section");
    res.json(sections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    // Convert slug (like "ocilar-plus") back to readable name (like "OCILAR PLUS")
    const name = slug.replace(/-/g, " ");

    const product = await Product.findOne({ name: new RegExp(`^${name}$`, "i") });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// GET /api/classifications - unique classifications
export const getClassifications = async (req, res) => {
  try {
    const classifications = await Product.distinct("classification");
    res.json(classifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

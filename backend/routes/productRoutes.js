// backend/routes/productRoutes.js
import express from "express";
import { getProducts, addProduct, getSections, getClassifications } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);                   // /api/products
router.post("/", addProduct);                   // create product (for seeding/admin)
router.get("/sections", getSections);           // /api/products/sections
router.get("/classifications", getClassifications); // /api/products/classifications

export default router;

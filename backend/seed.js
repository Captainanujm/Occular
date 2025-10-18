// backend/seed.js
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { Product } from "./models/Product.js";

dotenv.config();
await connectDB();

const sample = [
  { name: "OCILAR", section: "Eye / Ear Drops", classification: "Antibiotic", formulation: "Topical", packing: "10 ml", mrp: "₹40" },
  { name: "ACELAR-PLUS", section: "Tablet", classification: "Pain Relief", formulation: "Oral Solid", packing: "10x10", mrp: "₹55" },
  { name: "OCUCOF-LS", section: "Syrup", classification: "Respiratory", formulation: "Oral Liquid", packing: "100 ml", mrp: "₹89" },
  // ... paste many entries from PDF
];

await Product.deleteMany({});
await Product.insertMany(sample);
console.log("Seeded products:", sample.length);
process.exit();

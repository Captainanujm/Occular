// backend/seed.js
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { Product } from "./models/Product.js";

dotenv.config();
await connectDB();

export const sample = [
  // 👁️ Eye / Ear Drops
  { name: "OCILAR", section: "Eye / Ear Drops", classification: "Antibiotic", formulation: "Topical", packing: "10 ml", mrp: "₹40" },
  { name: "NEOZIN", section: "Eye / Ear Drops", classification: "Anti-inflammatory", formulation: "Topical", packing: "5 ml", mrp: "₹48" },
  { name: "CLARIDEX", section: "Eye / Ear Drops", classification: "Steroid + Antibiotic", formulation: "Topical", packing: "10 ml", mrp: "₹55" },
  { name: "OTRIVIN-E", section: "Eye / Ear Drops", classification: "Decongestant", formulation: "Topical", packing: "10 ml", mrp: "₹42" },
  { name: "AURIMED", section: "Eye / Ear Drops", classification: "Anti-fungal", formulation: "Topical", packing: "10 ml", mrp: "₹58" },

  // 💊 Tablets
  { name: "ACELAR-PLUS", section: "Tablet", classification: "Pain Relief", formulation: "Oral Solid", packing: "10x10", mrp: "₹55" },
  { name: "PANTODOM", section: "Tablet", classification: "Gastrointestinal", formulation: "Oral Solid", packing: "10x10", mrp: "₹68" },
  { name: "CITRAVIT-C", section: "Tablet", classification: "Vitamin Supplement", formulation: "Oral Solid", packing: "10x15", mrp: "₹95" },
  { name: "CEFIXA-200", section: "Tablet", classification: "Antibiotic", formulation: "Oral Solid", packing: "10x10", mrp: "₹115" },
  { name: "DOLOMET", section: "Tablet", classification: "Pain / Fever", formulation: "Oral Solid", packing: "10x10", mrp: "₹75" },
  { name: "ZINCOVIT", section: "Tablet", classification: "Multivitamin", formulation: "Oral Solid", packing: "15x10", mrp: "₹130" },
  { name: "CALDROX-D3", section: "Tablet", classification: "Bone Health", formulation: "Oral Solid", packing: "10x10", mrp: "₹120" },

  // 🍶 Syrups
  { name: "OCUCOF-LS", section: "Syrup", classification: "Respiratory", formulation: "Oral Liquid", packing: "100 ml", mrp: "₹89" },
  { name: "FEVOPLUS", section: "Syrup", classification: "Fever / Cold", formulation: "Oral Liquid", packing: "60 ml", mrp: "₹55" },
  { name: "LIVOTONE", section: "Syrup", classification: "Liver Tonic", formulation: "Oral Liquid", packing: "200 ml", mrp: "₹125" },
  { name: "VITATONE", section: "Syrup", classification: "Multivitamin", formulation: "Oral Liquid", packing: "150 ml", mrp: "₹110" },
  { name: "FERROPLUS", section: "Syrup", classification: "Iron Supplement", formulation: "Oral Liquid", packing: "150 ml", mrp: "₹99" },
  { name: "KUFEX", section: "Syrup", classification: "Cough / Cold", formulation: "Oral Liquid", packing: "100 ml", mrp: "₹85" },
  { name: "ANTACID-M", section: "Syrup", classification: "Digestive", formulation: "Oral Liquid", packing: "170 ml", mrp: "₹70" },

  // 💉 Injectables
  { name: "CEFTRIAXONE 1GM", section: "Injectables", classification: "Antibiotic", formulation: "Injection", packing: "1 vial", mrp: "₹180" },
  { name: "DEXAMETHASONE", section: "Injectables", classification: "Steroid", formulation: "Injection", packing: "2 ml", mrp: "₹45" },
  { name: "B-COMPLEX INJ", section: "Injectables", classification: "Vitamin Supplement", formulation: "Injection", packing: "2 ml", mrp: "₹55" },
  { name: "PANTOP-40", section: "Injectables", classification: "Gastrointestinal", formulation: "Injection", packing: "1 vial", mrp: "₹95" },

  // 🧴 Ointments & Lotions
  { name: "DICLOGEL", section: "Ointments & Lotions", classification: "Pain Relief", formulation: "Topical Gel", packing: "30 g", mrp: "₹78" },
  { name: "FUNGICREAM", section: "Ointments & Lotions", classification: "Antifungal", formulation: "Topical Cream", packing: "20 g", mrp: "₹65" },
  { name: "DERMISAL", section: "Ointments & Lotions", classification: "Skin Infection", formulation: "Topical Ointment", packing: "25 g", mrp: "₹72" },
  { name: "CALAMOIST", section: "Ointments & Lotions", classification: "Moisturizer", formulation: "Lotion", packing: "100 ml", mrp: "₹110" },
  { name: "PIMCORT", section: "Ointments & Lotions", classification: "Steroid", formulation: "Cream", packing: "20 g", mrp: "₹95" },

  // 🌿 Ayurvedic / Herbal
  { name: "HERBOLIV", section: "Ayurvedic / Herbal", classification: "Liver Health", formulation: "Syrup", packing: "200 ml", mrp: "₹130" },
  { name: "TULSI-KUF", section: "Ayurvedic / Herbal", classification: "Cough / Cold", formulation: "Syrup", packing: "100 ml", mrp: "₹85" },
  { name: "ASHWAGANDHA-CAP", section: "Ayurvedic / Herbal", classification: "Stress Relief", formulation: "Capsule", packing: "60 Caps", mrp: "₹210" },
  { name: "TRIPHALA-PLUS", section: "Ayurvedic / Herbal", classification: "Digestive Health", formulation: "Powder", packing: "100 g", mrp: "₹95" },
  { name: "AMLA-RAS", section: "Ayurvedic / Herbal", classification: "Immunity Booster", formulation: "Juice", packing: "500 ml", mrp: "₹160" },

  // 🧃 Protein / Supplements
  { name: "PROTIGAIN DHA", section: "Protein Powder with DHA", classification: "Nutritional Supplement", formulation: "Powder", packing: "200 g", mrp: "₹320" },
  { name: "WHEYMAX", section: "Protein Powder with DHA", classification: "Muscle Gain", formulation: "Powder", packing: "250 g", mrp: "₹450" },
  { name: "CALPRO DHA", section: "Protein Powder with DHA", classification: "Bone Health", formulation: "Powder", packing: "200 g", mrp: "₹310" }
];

await Product.deleteMany({});
await Product.insertMany(sample);
console.log("Seeded products:", sample.length);
process.exit();

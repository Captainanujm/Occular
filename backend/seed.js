import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { Product } from "./models/Product.js";

dotenv.config();
await connectDB();

export const sample = [
  // 👁️ Eye / Ear Drops
  {
    name: "OCILAR",
    slug: "ocilar",
    section: "Eye and Ear Drops",
    classification: "Antibiotic",
    formulation: "Topical",
    packing: "10 ml",
    mrp: "₹40",
    description:
      "OCILAR is a trusted antibiotic eye and ear drop used to treat bacterial infections effectively.",
    details: [
      {
        heading: "Usage",
        content:
          "Apply as directed by the physician. Typically used for bacterial infections in the eyes or ears.",
      },
      {
        heading: "Composition",
        content:
          "Contains broad-spectrum antibiotic agents designed for topical application.",
      },
    ],
  },
  {
    name: "NEOZIN",
    slug: "neozin",
    section: "Eye and Ear Drops",
    classification: "Anti-inflammatory",
    formulation: "Topical",
    packing: "5 ml",
    mrp: "₹48",
    description:
      "NEOZIN provides quick relief from inflammation and irritation in the eyes or ears.",
    details: [
      {
        heading: "Benefits",
        content:
          "Reduces redness and inflammation effectively with minimal side effects.",
      },
      {
        heading: "Direction for Use",
        content:
          "Instill 1–2 drops as prescribed, avoiding contamination of the dropper tip.",
      },
    ],
  },
  {
    name: "CLARIDEX",
    slug: "claridex",
    section: "Eye and Ear Drops",
    classification: "Steroid + Antibiotic",
    formulation: "Topical",
    packing: "10 ml",
    mrp: "₹55",
    description:
      "CLARIDEX combines steroid and antibiotic properties to reduce inflammation and fight infection.",
    details: [
      {
        heading: "Mechanism",
        content:
          "Targets both bacterial infection and inflammatory response for faster recovery.",
      },
      {
        heading: "Storage",
        content: "Store in a cool and dry place away from direct sunlight.",
      },
    ],
  },

  // 💊 Tablets
  {
    name: "ACELAR-PLUS",
    slug: "acelar-plus",
    section: "Tablet",
    classification: "Pain Relief",
    formulation: "Oral Solid",
    packing: "10x10",
    mrp: "₹55",
    description:
      "ACELAR-PLUS provides fast pain relief and reduces inflammation for muscle and joint pain.",
    details: [
      {
        heading: "Key Ingredients",
        content:
          "Contains a blend of anti-inflammatory and analgesic compounds for effective relief.",
      },
      {
        heading: "Dosage",
        content: "1 tablet twice daily after meals or as directed by a doctor.",
      },
    ],
  },
  {
    name: "PANTODOM",
    slug: "pantodom",
    section: "Tablet",
    classification: "Gastrointestinal",
    formulation: "Oral Solid",
    packing: "10x10",
    mrp: "₹68",
    description:
      "PANTODOM helps relieve acidity, heartburn, and stomach ulcers effectively.",
    details: [
      {
        heading: "How It Works",
        content:
          "Reduces excess acid production by inhibiting proton pumps in the stomach.",
      },
      {
        heading: "Recommended Use",
        content: "Take before meals once daily or as directed by your doctor.",
      },
    ],
  },

  // 🍶 Syrups
  {
    name: "OCUCOF-LS",
    slug: "ocucof-ls",
    section: "Syrup",
    classification: "Respiratory",
    formulation: "Oral Liquid",
    packing: "100 ml",
    mrp: "₹89",
    description:
      "OCUCOF-LS syrup provides relief from cough and congestion with soothing effects.",
    details: [
      {
        heading: "Benefits",
        content:
          "Helps loosen mucus, reduce cough intensity, and clear the respiratory tract.",
      },
      {
        heading: "Precaution",
        content: "Shake well before use. Store in a cool and dry place.",
      },
    ],
  },
  {
    name: "LIVOTONE",
    slug: "livotone",
    section: "Syrup",
    classification: "Liver Tonic",
    formulation: "Oral Liquid",
    packing: "200 ml",
    mrp: "₹125",
    description:
      "LIVOTONE is a liver tonic that supports liver function and promotes detoxification.",
    details: [
      {
        heading: "Usage",
        content: "Take 1–2 teaspoons twice daily after meals or as directed.",
      },
      {
        heading: "Benefits",
        content: "Improves digestion and strengthens liver health naturally.",
      },
    ],
  },

  // 💉 Injectables
  {
    name: "CEFTRIAXONE 1GM",
    slug: "ceftriaxone-1gm",
    section: "Injectables",
    classification: "Antibiotic",
    formulation: "Injection",
    packing: "1 vial",
    mrp: "₹180",
    description:
      "CEFTRIAXONE 1GM is a powerful antibiotic used for severe bacterial infections.",
    details: [
      {
        heading: "Indication",
        content:
          "Used for treating respiratory, urinary, and skin infections effectively.",
      },
      {
        heading: "Administration",
        content: "Should be administered intramuscularly or intravenously.",
      },
    ],
  },

  // 🧴 Ointments & Lotions
  {
    name: "DICLOGEL",
    slug: "diclogel",
    section: "Ointments and Lotions",
    classification: "Pain Relief",
    formulation: "Topical Gel",
    packing: "30 g",
    mrp: "₹78",
    description:
      "DICLOGEL is a fast-acting pain relief gel for muscle strains and joint pain.",
    details: [
      {
        heading: "How to Apply",
        content:
          "Apply on the affected area and massage gently 2–3 times daily.",
      },
      {
        heading: "Caution",
        content: "Avoid contact with open wounds and eyes.",
      },
    ],
  },

  // 🌿 Ayurvedic / Herbal
  {
    name: "HERBOLIV",
    slug: "herboliv",
    section: "Ayurvedic and Herbal",
    classification: "Liver Health",
    formulation: "Syrup",
    packing: "200 ml",
    mrp: "₹130",
    description:
      "HERBOLIV is a natural liver tonic that promotes liver detox and regeneration.",
    details: [
      {
        heading: "Benefits",
        content:
          "Enhances liver function and supports digestive wellness using herbal ingredients.",
      },
      {
        heading: "Usage",
        content: "Consume 10 ml twice daily after meals.",
      },
    ],
  },

  // 🧃 Protein / Supplements
  {
    name: "PROTIGAIN DHA",
    slug: "protigain-dha",
    section: "Protein Powder with DHA",
    classification: "Nutritional Supplement",
    formulation: "Powder",
    packing: "200 g",
    mrp: "₹320",
    description:
      "PROTIGAIN DHA provides essential proteins and omega fatty acids for muscle growth and energy.",
    details: [
      {
        heading: "Benefits",
        content:
          "Supports muscle recovery, strength building, and overall wellness.",
      },
      {
        heading: "How to Use",
        content: "Mix 1 scoop with milk or water twice daily.",
      },
    ],
  },
];

await Product.deleteMany({});
await Product.insertMany(sample);
console.log("✅ Seeded products:", sample.length);
process.exit();

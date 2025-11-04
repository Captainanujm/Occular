import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { Product } from "./models/Product.js";

dotenv.config();
await connectDB();

export const sample = [
  {
    "name": "ACELAR-MR",
    "slug": "acelar-mr",
    "image": "/ACELAR-MR.jpg",
    "section": "Tablet",
    "classification": "Pain Relief & Muscle Relaxant",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹75.00",
    "description": "ACELAR-MR is a combination tablet containing Aceclofenac, Paracetamol, and Chlorzoxazone, used to relieve pain, inflammation, and muscle spasms.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each uncoated tablet contains: Aceclofenac I.P. 100 mg, Paracetamol I.P. 325 mg, Chlorzoxazone I.P. 250 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place. Protect from direct sunlight, heat & moisture."
      },
      {
        "heading": "Manufactured By",
        "content": "Ocular Pharmaceuticals"
      }
    ]
  },
  {
    "name": "ACELAR PLUS",
    "slug": "acelar-plus",
    "image": "/ACELAR-PLUS.jpg",
    "section": "Tablet",
    "classification": "Pain Relief",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹55.00",
    "description": "ACELAR PLUS is a combination of Aceclofenac and Paracetamol tablets, used for pain relief and reducing inflammation.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Aceclofenac IP 100 mg, Paracetamol IP 325 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from moisture at a temperature not exceeding 30°C. Keep the medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "ACELAR - SP",
    "slug": "acelar-sp",
    "image": "/ACELAR-SP.jpg",
    "section": "Tablet",
    "classification": "Pain Relief & Anti-inflammatory",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹110.00",
    "description": "ACELAR - SP is a combination tablet containing Aceclofenac, Paracetamol, and Serratiopeptidase, used to relieve pain, inflammation, and swelling.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Aceclofenac IP 100 mg, Paracetamol IP 325 mg, Serratiopeptidase IP 15 mg (as Enteric coated granules)"
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from light & moisture at a temperature not exceeding 30°C. Keep the medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "CFD-200",
    "slug": "cfd-200",
    "image": "/CFD-200.jpg",
    "section": "Tablet",
    "classification": "Antibiotic",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹230.00",
    "description": "CFD-200 contains Cefpodoxime Proxetil, an antibiotic used to treat a wide variety of bacterial infections.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Cefpodoxime Proxetil IP eq. to Cefpodoxime 200 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from moisture at a temperature not exceeding 30°C. Keep the medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "H-ZIN M",
    "slug": "h-zin-m",
    "image": "/H-ZIN M.jpg",
    "section": "Tablet",
    "classification": "Anti-allergic",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹130.00",
    "description": "H-ZIN M is a combination medication of Montelukast Sodium and Levocetirizine Hydrochloride, used to relieve symptoms of allergies like runny nose, sneezing, and watery eyes.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film-coated tablet contains: Montelukast Sodium IP eq. to Montelukast 10 mg, Levocetirizine Dihydrochloride IP 5 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from light & moisture at a temperature not exceeding 30°C. Keep the medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "O DIC-SP",
    "slug": "o-dic-sp",
    "image": "/O DIC-SP.jpg",
    "section": "Tablet",
    "classification": "Pain Relief & Anti-inflammatory",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹80.00",
    "description": "O DIC-SP is a combination tablet containing Diclofenac Potassium, Paracetamol, and Serratiopeptidase, used for the relief of pain, inflammation, and swelling.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Diclofenac Potassium 50 mg, Paracetamol 325 mg, Serratiopeptidase 15 mg (as 30,000 Serratiopeptidase units as enteric coated granules), Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Store protected from moisture, at a temperature not exceeding 30°C."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "O-DOT-M",
    "slug": "o-dot-m",
    "image": "/O DOT-M.jpg",
    "section": "Tablet",
    "classification": "Antispasmodic & Pain Relief",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹110.00",
    "description": "O-DOT-M is a combination tablet with Drotaverine HCl and Mefenamic Acid, primarily used to relieve spasmodic pain such as menstrual cramps and abdominal pain.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Drotaverine HCl IP 80 mg, Mefenamic Acid IP 250 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place at a temperature not exceeding 30°C. Protect from direct light & moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OC-CEF-200 LB",
    "slug": "oc-cef-200-lb",
    "image": "/OC-CEF-200 LB.jpg",
    "section": "Tablet",
    "classification": "Antibiotic with Probiotic",
    "formulation": "Oral Dispersible",
    "packing": "10x10",
    "mrp": "₹165.00",
    "description": "OC-CEF-200 LB is a dispersible tablet combining Cefixime (an antibiotic) and Lactic Acid Bacillus (a probiotic) to treat bacterial infections while maintaining gut health.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each uncoated dispersible tablet contains: Cefixime IP (as Trihydrate) eq. to Anhydrous Cefixime 200 mg, Lactic Acid Bacillus 60 million spores, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician. Direction for use: Disperse the tablet in a spoonful of boiled and cooled water before administration."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place at a temperature not exceeding 25°C. Protect from light & moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ociclav-625 LB",
    "slug": "ociclav-625-lb",
    "image": "/OCICLAV-625.jpg",
    "section": "Tablet",
    "classification": "Antibiotic with Probiotic",
    "formulation": "Oral Solid",
    "packing": "10x1x6",
    "mrp": "₹130.00",
    "description": "Ociclav-625 LB is a combination of Amoxycillin, Potassium Clavulanate, and Lactic Acid Bacillus tablets, used to treat bacterial infections while supporting gut flora.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Amoxycillin Trihydrate IP eq. to Amoxycillin 500 mg, Potassium Clavulanate Diluted IP eq. to Clavulanic Acid 125 mg, Lactic Acid Bacillus 60 Million Spores, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Store protected from moisture, at a temperature not exceeding 25°C. Keep the medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocicox-90",
    "slug": "ocicox-90",
    "image": "/OCICOX-90.jpg",
    "section": "Tablet",
    "classification": "Pain Relief (NSAID)",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹100.00",
    "description": "Ocicox-90 contains Etoricoxib, a non-steroidal anti-inflammatory drug (NSAID) used to relieve pain and inflammation in conditions like osteoarthritis and rheumatoid arthritis.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Etoricoxib IP 90 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Storage in a cool, dry & dark place. Below 25°C. Keep medicine out of the reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocigrain-10",
    "slug": "ocigrain-10",
    "image": "/OCIGRAIN-10.jpg",
    "section": "Tablet",
    "classification": "Migraine Prophylaxis",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹40.00",
    "description": "Ocigrain-10 contains Flunarizine Dihydrochloride, a medication used for the prevention of migraine headaches.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Flunarizine Dihydrochloride B.P. equivalent to Flunarizine 10 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place at a temperature not exceeding 30°C. Protect from direct light & moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocilar-200",
    "slug": "ocilar-200",
    "image": "/OCILAR-200.jpg",
    "section": "Tablet",
    "classification": "Antibiotic",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹60.00",
    "description": "Ocilar-200 contains Ofloxacin, an antibiotic used to treat various bacterial infections.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Ofloxacin IP 200 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from light & moisture at a temperature not exceeding 30°C. Keep the medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocilar-OZ",
    "slug": "ocilar-oz",
    "image": "/OCILAR-OZ.jpg",
    "section": "Tablet",
    "classification": "Antibiotic & Antiamoebic",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹89.00",
    "description": "Ocilar-OZ is a combination tablet containing Ofloxacin and Ornidazole, used to treat bacterial and parasitic infections, particularly gastrointestinal and gynaecological infections.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Ofloxacin IP 200 mg, Ornidazole IP 500 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place, protected from light & moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocinac-Plus",
    "slug": "ocinac-plus",
    "image": "/OCINACPLUS.jpg",
    "section": "Tablet",
    "classification": "Pain Relief",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹55.00",
    "description": "Ocinac-Plus contains Aceclofenac and Paracetamol, used as a painkiller to relieve pain and inflammation in conditions like arthritis and ankylosing spondylitis.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Aceclofenac IP 100 mg, Paracetamol IP 325 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from moisture at a temperature not exceeding 30°C. Keep the medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
  "name": "Ocinac-SP",
  "slug": "ocinac-sp",
  "image": "/OCINAC-SP.jpg",
  "section": "Tablet",
  "classification": "Pain Relief & Anti-inflammatory",
  "formulation": "Oral Solid",
  "packing": "10x10",
  "mrp": "₹110.00",
  "description": "Ocinac-SP is a combination tablet containing Aceclofenac, Paracetamol, and Serratiopeptidase, used for relieving pain, inflammation, and swelling.",
  "details": [
    {
      "heading": "Composition",
      "content": "Each film coated tablet contains: Aceclofenac IP 100 mg, Paracetamol IP 325 mg, Serratiopeptidase IP 15 mg (eq. to 30,000 units of enzyme activity)"
    },
    {
      "heading": "Dosage",
      "content": "As directed by the Physician."
    },
    {
      "heading": "Storage",
      "content": "Store protected from light & moisture at a temperature not exceeding 30°C. Keep the medicine out of reach of children."
    },
    {
      "heading": "Marketed By",
      "content": "OCULAR PHARMACEUTICALS"
    }
  ]
},
  {
    "name": "Ocilar-OZ",
    "slug": "ocilar-oz",
    "image": "/OCLIAR-OZ.jpg",
    "section": "Tablet",
    "classification": "Antibiotic & Antiamoebic",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹89.00",
    "description": "Ocilar-OZ is a combination tablet containing Ofloxacin and Ornidazole, used to treat bacterial and parasitic infections, particularly gastrointestinal infections.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Ofloxacin I.P. 200 mg, Ornidazole I.P. 500 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place, protected from light & moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocucef-O",
    "slug": "ocucef-o",
    "image": "/OCUCEF-O.jpg",
    "section": "Tablet",
    "classification": "Antibiotic",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹220.00",
    "description": "Ocucef-O is a combination tablet containing Cefixime and Ofloxacin, used to treat a wide variety of bacterial infections.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Cefixime Trihydrate IP eq. to Anhydrous Cefixime 200 mg, Ofloxacin IP 200 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place at a temperature not exceeding 30°C. Protect from direct light & moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OCITHER-LF",
    "slug": "ocither-lf",
    "image": "/OCITHER.jpg",
    "section": "Tablet",
    "classification": "Antimalarial",
    "formulation": "Oral Solid",
    "packing": "10x6",
    "mrp": "",
    "description": "OCITHER-LF is a combination of Artemether and Lumefantrine tablets, used for the treatment of malaria.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each uncoated tablet contains: Artemether 80 mg, Lumefantrine 480 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry place. Protect from light."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OCUCEF - 200 LB",
    "slug": "ocucef-200-lb",
    "image": "/OCUCEF-200.jpg",
    "section": "Tablet",
    "classification": "Antibiotic with Probiotic",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹165.00",
    "description": "OCUCEF - 200 LB is a combination tablet with Cefixime (an antibiotic) and Lactic Acid Bacillus (a probiotic) to treat bacterial infections while supporting gut health.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Cefixime I.P. (Eq. to Anhydrous Cefixime) 200 mg, Lactic Acid Bacillus 60 Million Spores, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place, protect from direct sunlight. Keep all medicines out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OCUCET-5",
    "slug": "ocucet-5",
    "image": "/OCUCET-5.jpg",
    "section": "Tablet",
    "classification": "Anti-allergic",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹40.00",
    "description": "OCUCET-5 contains Levocetirizine Dihydrochloride, an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching, and sneezing.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Levocetirizine Dihydrochloride IP 5 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from light & moisture. Keep the medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocucet LM",
    "slug": "ocucet-lm",
    "image": "/OCUCET-LM.jpg",
    "section": "Capsule",
    "classification": "Anti-allergic",
    "formulation": "Soft Gelatin Capsules",
    "packing": "10x10",
    "mrp": "₹130.00",
    "description": "Ocucet LM combines Levocetirizine HCl and Montelukast Sodium in a soft gelatin capsule, used to relieve allergy symptoms and prevent asthma.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each soft gelatin capsule contains: Levocetirizine Dihydrochloride IP 5 mg, Montelukast Sodium IP eq. to Montelukast 10 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry place. Protect from light and moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "Ocitop-40",
    "slug": "ocitop-40",
    "image": "/OCITOP-40.jpg",
    "section": "Tablet",
    "classification": "Gastrointestinal",
    "formulation": "Gastro-resistant Tablets",
    "packing": "10x10",
    "mrp": "₹99.00",
    "description": "Ocitop-40 contains Pantoprazole, a proton pump inhibitor that reduces the amount of acid produced in the stomach. Used for acid reflux and ulcers.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each enteric coated tablet contains: Pantoprazole Sodium IP eq. to Pantoprazole 40 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place, protected from light & moisture, at a temperature not exceeding 30°C."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "O-CORT 6",
    "slug": "o-cort-6",
    "image": "/O-CORT 6.jpg",
    "section": "Tablet",
    "classification": "Corticosteroid",
    "formulation": "Oral Solid",
    "packing": "10x10",
    "mrp": "₹145.00",
    "description": "O-CORT 6 contains Deflazacort, a corticosteroid used to treat inflammation, severe allergies, and chronic conditions.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each uncoated tablet contains: Deflazacort 6 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Protected from light & moisture. Keep the medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OCUCEF-100",
    "slug": "ocucef-100",
    "image": "/OCUCEF-100.jpg",
    "section": "Tablet",
    "classification": "Antibiotic",
    "formulation": "Dispersible Tablets",
    "packing": "10x10",
    "mrp": "₹92.00",
    "description": "OCUCEF-100 contains Cefixime as dispersible tablets, an antibiotic used to treat a wide variety of bacterial infections.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each uncoated dispersible tablet contains: Cefixime (as Trihydrate) IP eq. to Anhydrous Cefixime 100 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place, protected from light & moisture. Keep the medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  }
];

await Product.deleteMany({});
await Product.insertMany(sample);
console.log("✅ Seeded products:", sample.length);
process.exit();
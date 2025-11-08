import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { Product } from "./models/Product.js";

dotenv.config();
await connectDB();

export const sample = [
  {
    "name": "Ocfylin-100",
    "slug": "ocfylin-100",
    "image": "/OCFYLIN-100.jpg",
    "section": "Capsule",
    "classification": "Bronchodilator / Anti-asthmatic",
    "formulation": "Hard Gelatin Capsules",
    "packing": "10x10",
    "mrp": "₹85.00",
    "description": "Ocfylin-100 contains Acebrophylline, used to treat and prevent symptoms of asthma and chronic obstructive pulmonary disease (COPD).",
    "details": [
      {
        "heading": "Composition",
        "content": "Each hard gelatin capsule contains: Acebrophylline 100 mg, Excipients q.s. Colour Used: Carmoisine, Erythrosine, Brilliant Blue, Titanium Dioxide."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. At a temperature not exceeding 25°C. Protect from direct light & moisture. Keep all Medicines out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocizyme",
    "slug": "ocizyme",
    "image": "/OCIZYME.jpg",
    "section": "Capsule",
    "classification": "Digestive Enzyme",
    "formulation": "Hard Gelatin Capsules",
    "packing": "10x10",
    "mrp": "₹120.00",
    "description": "Ocizyme is a digestive enzyme supplement containing Alpha Galactosidase, Lipase, Alpha Amylase, Protease, and Lactase to aid digestion.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each hard gelatin capsule contains: Alpha Galactosidase 150 mg, Lipase 10 mg, Alpha Amylase 50 mg, Protease 50 mg, Lactase 50 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the health expert."
      },
      {
        "heading": "Storage",
        "content": "Store below 25°C in a dry & dark place."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Adovit",
    "slug": "adovit",
    "image": "/ADOVIT.jpg",
    "section": "Capsule",
    "classification": "Nutritional Supplement",
    "formulation": "Soft Gelatin Capsules",
    "packing": "10x1x10",
    "mrp": "₹130.00",
    "description": "Adovit is a soft gelatin capsule containing Grape Seed Extract, Lycopene, Lutein, Vitamins, Selenium & Zinc.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each soft gelatin capsule contains: Grape Seed Extract 50 mg, Lycopene 6% 5000 mcg, Lutein 8% 3000 mcg, Vitamin A 5000 IU, Vitamin B1 5 mg, Vitamin B2 5 mg, Vitamin B6 1.5 mg, Vitamin B12 15 mcg, Folic Acid 1.5 mg, Zinc Sulphate Monohydrate 20 mg, Selenium Dioxide 70 mcg."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Protect from direct sunlight, heat & moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "OCITOP-LS",
    "slug": "ocitop-ls",
    "image": "/OCITOP-LS.jpg",
    "section": "Capsule",
    "classification": "Gastrointestinal",
    "formulation": "Sustained Release Capsules",
    "packing": "10x10",
    "mrp": "₹180.00",
    "description": "OCITOP-LS is a combination capsule with Pantoprazole (Enteric Coated) and Levosulpiride (Sustained Release) for treating gastroesophageal reflux disease (GERD).",
    "details": [
      {
        "heading": "Composition",
        "content": "Each hard gelatin capsule contains: Pantoprazole Sodium IP eq. to Pantoprazole 40 mg (as enteric coated pellets), Levosulpiride 75 mg (as sustained release pellets), Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store below 25°C. Protected from moisture. Keep the medicine out of reach of Children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "ADOVIT-7G",
    "slug": "adovit-7g",
    "image": "/ADOVIT-7G.jpg",
    "section": "Capsule",
    "classification": "Nutritional Supplement",
    "formulation": "Softgel Capsules",
    "packing": "10x1x10",
    "mrp": "₹299.50",
    "description": "ADOVIT-7G is a comprehensive multivitamin and multimineral softgel capsule with Omega 3, Ginseng, Ginkgo Biloba, Green Tea, and various other extracts.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each soft gelatin capsule contains: Omega 3 Fatty Acids (EPA 90mg, DHA 60mg), Ginseng (42.5mg), Ginkgo Biloba (10mg), Green Tea Extract (10mg), Garlic Extract (10mg), Grape Seed Extract (10mg), Ginger Extract (10mg), Green Coffee Extract (10mg), Citrus Bioflavonoids (10mg), Lutein (250mcg), Mixed Carotenoids (5mg), Piperine (5mg), Wheat Germ Oil (10mg), plus essential Vitamins, Minerals & Trace Elements."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Below 25°C. Protect from direct light, heat & moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "Ocitop-DSR",
    "slug": "ocitop-dsr",
    "image": "/OCITOP-DSR.jpg",
    "section": "Capsule",
    "classification": "Gastrointestinal",
    "formulation": "Gastro-resistant and Prolonged-release Capsules IP",
    "packing": "10x10",
    "mrp": "₹125.00",
    "description": "Ocitop-DSR is a combination capsule containing Pantoprazole (Gastro-resistant) and Domperidone (Prolonged-release) for acidity and GERD.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each hard gelatin capsule contains: Pantoprazole Sodium IP eq. to Pantoprazole 40 mg (as gastro-resistant pellets), Domperidone IP 30 mg (as prolonged-release pellets), Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from moisture, at a temperature not exceeding 25°C. Keep all medicines out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocumin Plus",
    "slug": "ocumin-plus",
    "image": "/OCUMIN-PLUS.jpeg",
    "section": "Capsule",
    "classification": "Nutritional Supplement",
    "formulation": "Softgel Capsules",
    "packing": "10x1x10",
    "mrp": "",
    "description": "Ocumin Plus is a softgel capsule containing Methylcobalamin, Alpha Lipoic Acid, Pyridoxine HCl & Folic Acid, used for nerve health.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each softgel capsule contains: Methylcobalamin, Alpha Lipoic Acid, Pyridoxine HCl & Folic Acid."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "OCIPLAT",
    "slug": "ociplat",
    "image": "/OCIPLAT.jpg",
    "section": "Capsule",
    "classification": "Ayurvedic Platelet Booster",
    "formulation": "Softgel Capsules",
    "packing": "10x1x10",
    "mrp": "₹250.00",
    "description": "OCIPLAT is an Ayurvedic softgel capsule with Giloe, Papaya Leaves, Haldi, and other herbs to help increase platelet count.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each Softgel Capsule Contains: Giloe 150 mg, Papaya Leaves 350 mg, Haldi 40 mg, Shatavari 20 mg, Flax Seed 60 mg, Amla 30 mg, Aloevera 15 mg, Tulsi 20 mg, Gokhru 10 mg, Punernava 10 mg, Kachur 50 mg, Goat Milk Powder 10 mg, Base q.s."
      },
      {
        "heading": "Dosage",
        "content": "1 Softgel capsule twice a day or As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OCZ",
    "slug": "ocz",
    "image": "/O C Z.jpeg",
    "section": "Capsule",
    "classification": "Calcium & Vitamin Supplement",
    "formulation": "Soft Gelatin Capsules",
    "packing": "10x1x10",
    "mrp": "₹150.00",
    "description": "OCZ is a soft gelatin capsule containing Calcitriol, Calcium Carbonate & Zinc, used for bone health.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each soft gelatin capsule contains: Calcitriol I.P. 0.25 mcg, Calcium Carbonate I.P. 500 mg (eq. to elemental Calcium 200 mg), Zinc (as Zinc Sulphate Monohydrate I.P.) 7.5 mg."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Protect from direct sunlight, heat & moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "Ocukoff",
    "slug": "ocukoff",
    "image": "/OCUKOFF.jpeg",
    "section": "Capsule",
    "classification": "Cough & Cold",
    "formulation": "Soft Gelatin Capsules",
    "packing": "10x10",
    "mrp": "",
    "description": "Ocukoff (Cofgel) is a soft gelatin capsule containing Dextromethorphan, Phenylephrine, and Chlorpheniramine for cough and cold relief.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each soft gelatin capsule contains: Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride & Chlorpheniramine Maleate."
      },
      {
        "heading":"To_Way Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry place."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "Rose-DSR",
    "slug": "rose-dsr",
    "image": "/ROSE-DSR.jpg",
    "section": "Capsule",
    "classification": "Gastrointestinal",
    "formulation": "Enteric Coated & Sustained Release Capsules",
    "packing": "10x10",
    "mrp": "₹99.00",
    "description": "Rose-DSR is a combination capsule containing Enteric Coated Rabeprazole Sodium and Domperidone (SR) used for treating acidity, heartburn, and GERD.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each hard gelatin capsule contains: Rabeprazole Sodium IP 20 mg (As enteric Coated Pellets), Domperidone IP 30 mg (As sustained release pellets), Excipients q.s. Colours: Sunset Yellow FCF & Titanium Dioxide IP."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician. Caution: Capsule should be swallowed as whole & not to be opened, chewed or crushed."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place at a temperature not exceeding 25°C. Protect from direct light & moisture. Keep all medicines out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "ORB-DSR",
    "slug": "orb-dsr",
    "image": "/ORB-DSR.jpg",
    "section": "Capsule",
    "classification": "Gastrointestinal",
    "formulation": "Enteric Coated & Sustained Release Capsules",
    "packing": "10x10",
    "mrp": "₹120.00",
    "description": "ORB-DSR is a combination capsule containing Enteric Coated Rabeprazole Sodium and Domperidone (SR) used for treating gastroesophageal reflux disease.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each hard gelatin capsule contains: Rabeprazole Sodium IP 20 mg (As enteric coated pellets), Domperidone IP 30 mg (As sustained release pellets), Excipients q.s. Colour: Red Oxide of Iron, Sunset Yellow FCF & Titanium Dioxide IP."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician. Caution: Capsule should be swallowed as whole & not to be opened, chewed or crushed."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. At a temperature not exceeding 25°C. Protect from direct light & moisture. Keep all medicines out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "MOFI LP",
    "slug": "mofi-lp",
    "image": "/MOFI-LP.jpg",
    "section": "Eye Drops",
    "classification": "Antibiotic & Steroid",
    "formulation": "Ophthalmic Suspension",
    "packing": "5 ml Sterile",
    "mrp": "",
    "description": "Loteprednol Etabonate & Moxifloxacin Ophthalmic Suspension. PRESERVATIVE FREE.",
    "details": [
      {
        "heading": "Composition",
        "content": "Loteprednol Etabonate 5.0 mg, Moxifloxacin Hydrochloride IP Equivalent to Moxifloxacin 5.0 mg, Sterile Aqueous vehicle q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by physician. SHAKE WELL BEFORE USE."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place. Do not freeze. Keep the medicine out of reach of children."
      },
      {
        "heading": "Manufactured By",
        "content": "SION' HEALTHCARE"
      }
    ]
  },
  {
    "name": "MOFI-P",
    "slug": "mofi-p",
    "image": "/MOFI-P.jpg",
    "section": "Eye Drops",
    "classification": "Antibiotic & Steroid",
    "formulation": "Ophthalmic Suspension",
    "packing": "5 ml Sterile",
    "mrp": "",
    "description": "Moxifloxacin with Prednisolone Ophthalmic Suspension.",
    "details": [
      {
        "heading": "Composition",
        "content": "Moxifloxacin Hydrochloride IP Equivalent to Moxifloxacin 0.5% w/v, Prednisolone Acetate IP 1.0% w/v, Benzalkonium Chloride Solution (As Preservative) IP 0.02% v/v, Sterile Aqueous vehicle q.s."
      },
      {
        "heading": "Dosage",
        "content": "Instill drop into each eye twice daily or as directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dark place. Replace the cap after every use of bottle. SHAKE WELL BEFORE USE."
      },
      {
        "heading": "Manufactured By",
        "content": "SION' HEALTHCARE"
      }
    ]
  },
  {
    "name": "NA-CMC GEL",
    "slug": "na-cmc-gel",
    "image": "/NA-CMC GEL.jpg",
    "section": "Eye Drops",
    "classification": "Lubricant Eye Drops",
    "formulation": "Ophthalmic Solution IP",
    "packing": "10ml",
    "mrp": "",
    "description": "Sodium Carboxymethyl-Cellulose Ophthalmic Solution IP. LUBRICANT EYE DROPS.",
    "details": [
      {
        "heading": "Composition",
        "content": "Sodium Carboxymethyl-Cellulose I.P. 1% w/v, Stabilized oxychloro complex (as preservative) 0.0075% w/v, Sterile Aqueous base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "NMS Healthcare"
      }
    ]
  },
  {
    "name": "Mofi",
    "slug": "mofi",
    "image": "/MOFI.jpg",
    "section": "Eye Drops",
    "classification": "Antibiotic",
    "formulation": "Eye Drops 0.5% IP",
    "packing": "5 ML STERILE",
    "mrp": "",
    "description": "Moxifloxacin Eye Drops 0.5% IP. This Product is self preserved.",
    "details": [
      {
        "heading": "Composition",
        "content": "Moxifloxacin Hydrochloride IP eq. to Moxifloxacin 0.5% w/v, Sterile base q.s. Preservative: This Product is self preserved."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Keep in a cool & dark place."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "NA-CMC ULTRA",
    "slug": "na-cmc-ultra",
    "image": "/NA-CMC ULTRA.jpg",
    "section": "Eye Drops",
    "classification": "Lubricant Eye Drops",
    "formulation": "Ophthalmic Solution",
    "packing": "10 ml. STERILE",
    "mrp": "",
    "description": "Polyethylene Glycol 400 & Propylene Glycol Ophthalmic Solution.",
    "details": [
      {
        "heading": "Composition",
        "content": "Polyethylene Glycol 400 IP 0.4% w/v, Propylene Glycol IP 0.3% w/v, Sodium Perborate BP (As preservative) 0.005% w/v, Sterile Aqueous Base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store below 30°C. Protect from light & moisture. Do not freeze."
      },
      {
        "heading": "Manufactured By",
        "content": "SION' HEALTHCARE (SHL) LIMITED"
      }
    ]
  },
  {
    "name": "MOFI-D",
    "slug": "mofi-d",
    "image": "/MOFI-D.jpg",
    "section": "Eye Drops",
    "classification": "Antibiotic & Steroid",
    "formulation": "Eye Drops",
    "packing": "5ml",
    "mrp": "",
    "description": "Moxifloxacin & Dexamethasone Eye Drops.",
    "details": [
      {
        "heading": "Composition",
        "content": "Moxifloxacin HCI I.P. eq. to Moxifloxacin 0.5% w/v, Dexamethasone Sodium Phosphate I.P. eq. to Dexamethasone 0.1% w/v, Benzalkonium Chloride solution(As Preservative) I.P. 0.02% w/v, Sterile Aqueous base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "NMS Healthcare"
      }
    ]
  },
  {
    "name": "OCIBROM",
    "slug": "ocibrom",
    "image": "/OCIBROM.jpg",
    "section": "Eye Drops",
    "classification": "NSAID",
    "formulation": "Ophthalmic Solution",
    "packing": "5 ml Sterile",
    "mrp": "",
    "description": "Bromfenac Ophthalmic Solution 0.09% w/v.",
    "details": [
      {
        "heading": "Composition",
        "content": "Bromfenac Sodium Eq. to Bromfenac 0.09% w/v, Benzalkonium Chloride Solution (As Preservative) IP 0.01% w/v, Aqueous Buffered Vehicle q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place. Store below 30C. Do not allow to freeze. Protect from light."
      },
      {
        "heading": "Manufactured By",
        "content": "SION' HEALTHCARE"
      }
    ]
  },
  {
    "name": "Noor Tears",
    "slug": "noor-tears",
    "image": "/NOOR-TEARS.jpeg",
    "section": "Eye Drops",
    "classification": "Lubricant Eye Drops",
    "formulation": "Ophthalmic Solution",
    "packing": "10 ml",
    "mrp": "",
    "description": "Hydroxypropyl-methylcellulose with Glycerin & Dextran 70 Ophthalmic Solution.",
    "details": [
      {
        "heading": "Composition",
        "content": "Hydroxypropyl Methylcellulose IP 0.3%w/v, Glycerine IP 0.2%w/v, Dextran-70 USP 0.1%w/v, Stabilized Oxychloro Complex (As Preservative) 0.005 %w/v, Aqueous Isotonic Solution q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store at a temperature not exceeding 30°C. Protect from light & Moisture. Do not freeze."
      },
      {
        "heading": "Manufactured By",
        "content": "SION' HEALTHCARE"
      }
    ]
  },
  {
    "name": "NA-CMC",
    "slug": "na-cmc",
    "image": "/NA-CMC.jpg",
    "section": "Eye Drops",
    "classification": "Lubricant Eye Drops",
    "formulation": "Ophthalmic Solution IP",
    "packing": "10ml",
    "mrp": "",
    "description": "Sodium Carboxymethyl-Cellulose Ophthalmic Solution IP. LUBRICANT EYE DROPS.",
    "details": [
      {
        "heading": "Composition",
        "content": "Sodium Carboxymethyl-Cellulose I.P. 0.5% w/v, Stabilized oxychloro complex (as preservative) 0.0075% w/v, Sterile Aqueous base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place. Medicine: Keep out of reach of children."
      },
      {
        "heading": "Manufactured By",
        "content": "NMS Healthcare"
      }
    ]
  },
  {
    "name": "MOFI-K",
    "slug": "mofi-k",
    "image": "/MOFI-K.jpeg",
    "section": "Eye Drops",
    "classification": "Antibiotic & NSAID",
    "formulation": "Eye Drops",
    "packing": "5ml",
    "mrp": "",
    "description": "Moxifloxacin & Ketorolac Tromethamine Eye Drops.",
    "details": [
      {
        "heading": "Composition",
        "content": "Moxifloxacin HCI I.P. eq. to Moxifloxacin 0.5% w/v, Ketorolac Tromethamine I.P. 0.5% w/v, Sterile Aqueous base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "NMS Healthcare"
      }
    ]
  },
  {
    "name": "VINFLUR",
    "slug": "vinflur",
    "image": "/VINFLUR.jpg",
    "section": "Eye Drops",
    "classification": "NSAID",
    "formulation": "Ophthalmic Solution IP",
    "packing": "5ml",
    "mrp": "",
    "description": "Flurbiprofen Sodium Ophthalmic Solution IP.",
    "details": [
      {
        "heading": "Composition",
        "content": "Flurbiprofen Sodium I.P. 0.03%w/v, Benzalkonium Chloride Solution (As preservative) I.P. 0.01%v/v, Sterile Aqueous Base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "NMS Healthcare"
      }
    ]
  },
  {
    "name": "O-MOF P",
    "slug": "o-mof-p",
    "image": "/O-MOF-P.jpg",
    "section": "Eye Drops",
    "classification": "Antibiotic & Steroid",
    "formulation": "Ophthalmic Suspension",
    "packing": "5ml",
    "mrp": "",
    "description": "Moxifloxacin & Prednisolone Ophthalmic Suspension.",
    "details": [
      {
        "heading": "Composition",
        "content": "Moxifloxacin HCI I.P. eq. to Moxifloxacin 0.5% w/v, Prednisolone Acetate IP 1% w/v, Benzalkonium Chloride Solution(as preservative) IP 0.02%w/v, Sterile Aqueous base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician. Shake well before use."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "NMS Healthcare"
      }
    ]
  },
  {
    "name": "Ocuzole",
    "slug": "ocuzole",
    "image": "/OCUZOLE.jpg",
    "section": "Eye Drops",
    "classification": "Antifungal",
    "formulation": "Eye/ear Drops",
    "packing": "5ml Sterile",
    "mrp": "",
    "description": "Fluconazole Eye/ear Drops.",
    "details": [
      {
        "heading": "Composition",
        "content": "Fluconazole IP 0.3% w/v, Benzalkonium Chloride Solution IP (As Preservative) 0.01% v/v, Aqueous Buffered vehicle q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "SION' HEALTHCARE"
      }
    ]
  },
  {
    "name": "OCITOB-M",
    "slug": "ocitob-m",
    "image": "/OCITOB-M.jpg",
    "section": "Eye Drops",
    "classification": "Antibiotic",
    "formulation": "Eye Drops",
    "packing": "5 ML STERILE",
    "mrp": "",
    "description": "MOXIFLOXACIN & TOBRAMYCIN EYE DROPS.",
    "details": [
      {
        "heading": "Composition",
        "content": "Moxifloxacin Hydrochloride IP Eq. to Moxifloxacin 0.5% w/v, Tobramycin sulphate IP Eq. to Tobramycin 0.3% w/v, Sterile Aqueous Buffered Vehicle q.s."
      },
      {
        "heading": "Application",
        "content": "As Directed by the Physician. Recommended dosage by Doctor."
      },
      {
        "heading": "Storage",
        "content": "Store at a temperature not exceeding 30°C. Protect from light & Moisture. Do not freeze. Keep the medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "TRO-PLUS",
    "slug": "tro-plus",
    "image": "/TRO-PLUS.jpg",
    "section": "Eye Drops",
    "classification": "Mydriatic",
    "formulation": "Eye Drops",
    "packing": "5 ml",
    "mrp": "",
    "description": "Tropicamide & Phenylephrine HCI. Eye Drops.",
    "details": [
      {
        "heading": "Composition",
        "content": "Tropicamide I.P. 0.8% w/v, Phenylephrine HCI. I.P. 5% w/v, Benzalkonium Chloride I.P. (as preservative) 0.01% w/v, Sterile aqueous base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "NMS Healthcare"
      }
    ]
  },
  {
    "name": "Ocinac",
    "slug": "ocinac-eye-drops",
    "image": "/OCINAC.jpg",
    "section": "Eye Drops",
    "classification": "NSAID",
    "formulation": "Ophthalmic Solution",
    "packing": "5 ml Sterile",
    "mrp": "",
    "description": "Nepafenac Ophthalmic Solution 0.1% w/v. Preservative Free.",
    "details": [
      {
        "heading": "Composition",
        "content": "Nepafenac 0.1% w/v, Sterile water for Injection (Preserved with Ionic solvent system) q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store at a temperature not exceeding 30°C. Protect from light & Moisture. Do not freeze."
      },
      {
        "heading": "Manufactured By",
        "content": "SION' HEALTHCARE (SHL) LIMITED"
      }
    ]
  },
  {
    "name": "OCILAR",
    "slug": "ocilar",
    "image": "/OCILAR.jpg",
    "section": "Eye Drops",
    "classification": "Antibiotic",
    "formulation": "Ophthalmic Solution IP",
    "packing": "10 ml",
    "mrp": "",
    "description": "Ofloxacin Ophthalmic Solution IP.",
    "details": [
      {
        "heading": "Composition",
        "content": "Ofloxacin I.P. 0.3% w/v, Benzalkonium Chloride Solution I.P. (as preservative) 0.02% v/v, Sterile Aqueous base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "NMS Healthcare"
      }
    ]
  },
  {
    "name": "O-MOF",
    "slug": "o-mof",
    "image": "/O-MOF.jpg",
    "section": "Eye Drops",
    "classification": "Antibiotic",
    "formulation": "Ophthalmic Solution IP",
    "packing": "5 ml",
    "mrp": "",
    "description": "Moxifloxacin Ophthalmic Solution IP. This product is self preserved.",
    "details": [
      {
        "heading": "Composition",
        "content": "Moxifloxacin HCI IP eq. to Moxifloxacin 0.5% w/v, Sterile Aqueous base q.s., Preservative: This product is self preserved"
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "NMS Healthcare"
      }
    ]
  },
  {
    "name": "OCILAR-D",
    "slug": "ocilar-d",
    "image": "/OCILAR-D.jpg",
    "section": "Eye Drops",
    "classification": "Antibiotic & Steroid",
    "formulation": "Ophthalmic Solution (Eye/Ear Drops)",
    "packing": "5 ml",
    "mrp": "",
    "description": "Ofloxacin, Dexamethasone Sodium Phosphate & HPMC Ophthalmic Solution.",
    "details": [
      {
        "heading": "Composition",
        "content": "Ofloxacin I.P. 0.3% w/v, Dexamethasone Sodium Phosphate I.P. eq. to Dexamethasone 0.1% w/v, Hydroxypropyl Methyl-Cellulose I.P. 0.25%w/v, Benzalkonium Chloride Solution (as preservative) I.P. 0.02% v/v, Sterile aqueous base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "NMS Healthcare"
      }
    ]
  },
  {
    "name": "Ocugate-FL",
    "slug": "ocugate-fl",
    "image": "/OCUGATE-FL.jpeg",
    "section": "Eye Drops",
    "classification": "Antibiotic & NSAID",
    "formulation": "Ophthalmic Solution",
    "packing": "5ml",
    "mrp": "",
    "description": "Gatifloxacin & Flurbiprofen Sodium Ophthalmic Solution.",
    "details": [
      {
        "heading": "Composition",
        "content": "Gatifloxacin eq. to Anhydrous Gatifloxacin 0.3% w/v, Flurbiprofen Sodium I.P. 0.03%w/v, Benzalkonium Chloride Solution I.P. (as preservative) 0.02% v/v, Sterile Aqueous base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "NMS Healthcare"
      }
    ]
  },
  {
    "name": "VINSOL",
    "slug": "vinsol",
    "image": "/VINSOL.jpeg",
    "section": "Eye Drops",
    "classification": "Ocular Lubricant/Protectant",
    "formulation": "Eye Drops",
    "packing": "10 ml",
    "mrp": "",
    "description": "Potassium Iodide, Sodium Chloride & Calcium Chloride Eye Drops.",
    "details": [
      {
        "heading": "Composition",
        "content": "Potassium Iodide I.P. 3.3% w/v, Sodium Chloride I.P. 0.83% w/v, Calcium Chloride I.P. 1% w/v, Chlorobutol (as preservative) I.P. 0.5% w/v, Aqueous base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "NMS Healthcare"
      }
    ]
  },
  {
    "name": "VINGATE",
    "slug": "vingate",
    "image": "/VINGATE.jpg",
    "section": "Eye Drops",
    "classification": "Antibiotic",
    "formulation": "Ophthalmic Solution",
    "packing": "5 ml",
    "mrp": "",
    "description": "Gatifloxacin Ophthalmic Solution.",
    "details": [
      {
        "heading": "Composition",
        "content": "Gatifloxacin eq. to Anhydrous Gatifloxacin 0.3% w/v, Benzalkonium Chloride Solution I.P. (as preservative) 0.01% v/v, Sterile Aqueous base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "NMS Healthcare"
      }
    ]
  },{
    "name": "Ocicef-1000",
    "slug": "ocicef-1000",
    "image": "/OCICEF-1 GM.jpg",
    "section": "Injection",
    "classification": "Antibiotic",
    "formulation": "Injection IP (Vial + Sterile Water)",
    "packing": "1 gm vial + 10 ml Sterile Water",
    "mrp": "",
    "description": "Ocicef-1000 is a Ceftriaxone Injection IP used to treat bacterial infections. FOR I.M./I.V. USE.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each vial contains: Sterile Ceftriaxone Sodium IP equivalent to Ceftriaxone Anhydrous 1000 mg. This pack also contains one FFS ampoule of Sterile Water for Injection IP 10 ml."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from light at a temperature not exceeding 30°. Keep Medicine out of reach of children."
      },
      {
        "heading": "Manufactured By",
        "content": "OSCAR REMEDIES PVT. LTD."
      }
    ]
  },
  {
    "name": "OCIZOLE",
    "slug": "ocizole-40",
    "image": "/OCIZOLE-40.jpg",
    "section": "Injection",
    "classification": "Gastrointestinal (Proton Pump Inhibitor)",
    "formulation": "Lyophilized Powder for Injection",
    "packing": "40 mg vial + 10 ml Sterile Sodium Chloride",
    "mrp": "",
    "description": "OCIZOLE is an Esomeprazole 40 MG for Injection used to treat GERD and other acid-related conditions. For Intravenous injection only.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each vial contains: Sterile Esomeprazole Sodium eq. to Esomeprazole 40 mg (As lyophilized powder). This Pack also contains one FFS ampoule of Sterile Sodium Chloride Injection I.P. 10 ml 0.9% w/v."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place. Protect from light."
      },
      {
        "heading": "Manufactured By",
        "content": "OSCAR REMEDIES PVT. LTD."
      }
    ]
  },
  {
    "name": "Ocicef-375",
    "slug": "ocicef-375",
    "image": "/OCICEF-375.jpg",
    "section": "Injection",
    "classification": "Antibiotic",
    "formulation": "Injection (Vial + Sterile Water)",
    "packing": "375 mg vial + 5 ml Sterile Water",
    "mrp": "",
    "description": "Ocicef-375 is a Ceftriaxone & Sulbactam for Injection used to treat bacterial infections. FOR I.M./I.V. USE.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each vial contains: Sterile Ceftriaxone Sodium I.P. equivalent to Ceftriaxone Anhydrous 250 mg, Sterile Sulbactam Sodium U.S.P. equivalent to Sulbactam Anhydrous 125 mg. This pack also contains one FFS ampoule of Sterile Water for Injection I.P. 5 ml."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in cool, dry & dark place. Below 25°C."
      },
      {
        "heading": "Manufactured By",
        "content": "Oscar Remedies Pvt. Ltd."
      }
    ]
  },
  {
    "name": "Ocitop-IV",
    "slug": "ocitop-iv",
    "image": "/OCITOP-IV.jpg",
    "section": "Injection",
    "classification": "Gastrointestinal (Proton Pump Inhibitor)",
    "formulation": "Lyophilized Powder for Injection",
    "packing": "40 mg vial + 10 ml Sodium Chloride",
    "mrp": "",
    "description": "Ocitop-IV is a Pantoprazole Sodium 40 mg for Injection used to treat acid reflux and ulcers. For IV injection only.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each vial contains: Sterile Pantoprazole Sodium IP (Anhydrous) eq. to Pantoprazole 40 mg. This pack also contains: One FFS ampoule of Sodium Chloride Injection IP 0.9% W/V."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Protect from light. Store below 25°C. Keep out of reach of children."
      },
      {
        "heading": "Manufactured By",
        "content": "Oscar Remedies Pvt. Ltd."
      }
    ]
  },
  {
    "name": "Ocither",
    "slug": "ocither-injection",
    "image": "/OCITHER.jpg",
    "section": "Injection",
    "classification": "Antimalarial",
    "formulation": "Injection (Ampoules)",
    "packing": "3x2 ml",
    "mrp": "",
    "description": "Ocither is an α,β Arteether Injection (150mg / 2ml) for the rapid cure of Falciparum Malaria. FOR I.M. USE ONLY.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 2 ml. contains: (α,β) Arteether I.P. 150 mg, Oil Base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
          "content": "Store in a cool, dry place at a temperature not to exceed 25°C. Protect from light. Do not freeze."
      },
      {
        "heading": "Manufactured By",
        "content": "OSCAR REMEDIES PVT. LTD."
      }
    ]
  },
  {
    "name": "OCUDEC-25",
    "slug": "ocudec-25",
    "image": "/OCUDEC-25.jpg",
    "section": "Injection",
    "classification": "Anabolic Steroid",
    "formulation": "Injection IP (Dispo Pack)",
    "packing": "1ml Dispo Pack",
    "mrp": "₹75.00",
    "description": "OCUDEC-25 is a Nandrolone Decanoate Injection IP in a Dispo Pack. For I.M. Use Only.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each ml. contains: Nandrolone Decanoate IP 25 mg, Oily base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Protected from light. Not to be refrigerated."
      },
      {
        "heading": "Manufactured By",
        "content": "OSCAR REMEDIES PVT. LTD."
      }
    ]
  },
  {
    "name": "Ocicef-1.5",
    "slug": "ocicef-1.5",
    "image": "/OCICEF-1.5.jpg",
    "section": "Injection",
    "classification": "Antibiotic",
    "formulation": "Injection (Vial + Sterile Water)",
    "packing": "1.5 gm vial + 10ml Sterile Water",
    "mrp": "",
    "description": "Ocicef-1.5 is a Ceftriaxone & Sulbactam for Injection. FOR I.M./I.V. USE.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each vial contains: Sterile Ceftriaxone Sodium I.P. equivalent to Ceftriaxone Anhydrous 1000 mg, Sterile Sulbactam Sodium I.P. equivalent to Sulbactam Anhydrous 500 mg. This pack also contains one FFS ampoule of Sterile Water for Injection IP 10ml."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from light at a temperature not exceeding 30°. Keep medicine out of the reach of children."
      },
      {
        "heading": "Manufactured By",
        "content": "Oscar Remedies Pvt. Ltd."
      }
    ]
  },
  {
    "name": "Ocicef-500",
    "slug": "ocicef-500",
    "image": "/OCICEF-500.jpg",
    "section": "Injection",
    "classification": "Antibiotic",
    "formulation": "Injection IP (Vial + Sterile Water)",
    "packing": "500 mg vial + 5 ml Sterile Water",
    "mrp": "",
    "description": "Ocicef-500 is a Ceftriaxone Injection IP. FOR I.M./I.V. USE.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each vial contains: Ceftriaxone Sodium IP (Sterile) eq. to Anhydrous Ceftriaxone 500 mg. One FFS ampoule containing 5 ml sterile water for Injection I.P. included in this pack."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from light and moisture at a temperature not exceeding 30°."
      },
      {
        "heading": "Manufactured By",
        "content": "OSCAR REMEDIES PVT. LTD."
      }
    ]
  },
  {
    "name": "OCUDEC-50",
    "slug": "ocudec-50",
    "image": "/OCUDEC-50.jpg",
    "section": "Injection",
    "classification": "Anabolic Steroid",
    "formulation": "Injection IP (Dispo Pack)",
    "packing": "1ml Dispo Pack",
    "mrp": "₹183.00",
    "description": "OCUDEC-50 is a Nandrolone Decanoate Injection IP in a Dispo Pack. FOR I.M. USE ONLY.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each ml. contains: Nandrolone Decanoate IP 50 mg, Oily base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dark place. Protect from light."
      },
      {
        "heading": "Manufactured By",
        "content": "NMS Healthcare"
      }
    ]
  },
  {
    "name": "Ocicort-40",
    "slug": "ocicort-40",
    "image": "/OCICORT-40.jpg",
    "section": "Injection",
    "classification": "Corticosteroid",
    "formulation": "Injection IP (Vial)",
    "packing": "1 ml vial",
    "mrp": "",
    "description": "Ocicort-40 is a Triamcinolone Acetonide Injection IP (40 mg./ml.). For IM Use Only.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each ml. contains: Triamcinolone Acetonide IP 40 mg, Benzyl Alcohol (As preservative) 0.9% v/v, Sterile Water for Injection IP q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Protect from light. Keep medicine out of the reach of children."
      },
      {
        "heading": "Manufactured By",
        "content": "OSCAR REMEDIES PVT. LTD."
      }
    ]
  },
  {
    "name": "O-PIZ - 4.5",
    "slug": "o-piz-4.5",
    "image": "/O-PIZ 4.5.jpg",
    "section": "Injection",
    "classification": "Antibiotic",
    "formulation": "Injection IP (Vial + Sterile Water)",
    "packing": "4.5 gm Single Dose Vial",
    "mrp": "",
    "description": "O-PIZ - 4.5 is a Piperacillin & Tazobactam for Injection IP. FOR I.V. USE ONLY.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each vial contains: Piperacillin Sodium (Sterile) IP Eq. to Piperacillin Anhydrous 4 gm, Tazobactam Sodium (Sterile) IP Eq. to Tazobactam Anhydrous 500 mg. This Pack also contains one FFS ampoule of 20ml sterile water for injection."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Below 25°C. Keep Medicine out of the reach of children."
      },
      {
        "heading": "Manufactured By",
        "content": "OSCAR REMEDIES PVT. LTD."
      }
    ]
  },
  {
    "name": "O-Dic Aqua",
    "slug": "o-dic-aqua",
    "image": "/O-DIC AQUA.jpg",
    "section": "Injection",
    "classification": "Pain Relief (NSAID)",
    "formulation": "Injection IP (Ampoules)",
    "packing": "10 x 1 ml",
    "mrp": "",
    "description": "O-Dic Aqua is a Diclofenac Sodium Injection IP in a sterile aqueous base. For IM/IV INFUSION USE.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 1 ml. contains: Diclofenac Sodium Injection IP 75 mg (details from ampoule, not fully visible on box)."
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
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "O VOM",
    "slug": "o-vom-injection",
    "image": "/O-VOM INJ.jpg",
    "section": "Injection",
    "classification": "Antiemetic",
    "formulation": "Injection IP (Ampoules)",
    "packing": "10 x 2 ml. Ampoules",
    "mrp": "",
    "description": "O VOM is an Ondansetron Injection IP used to prevent nausea and vomiting. FOR I.M./I.V. USE ONLY.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each ml contains: Ondansetron Hydrochloride IP eq. to Ondansetron 2 mg (details from ampoule, not fully visible on box)."
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
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "Ocumin-Forte",
    "slug": "ocumin-forte",
    "image": "/OCUMIN-FORTE.jpg",
    "section": "Injection",
    "classification": "Vitamin Supplement",
    "formulation": "Injection (Ampoule + Dispo Pack)",
    "packing": "1 Ampoule of 2 ml",
    "mrp": "₹85.00",
    "description": "Ocumin-Forte is a Methylcobalamin, Pyridoxine HCl & Nicotinamide Injection. WITH STERILE DISPO PACK. FOR IM / IV infusion only.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 2ml contains: Methylcobalamin I.P. 1500 mcg, Pyridoxine HCl I.P. 100 mg, Nicotinamide I.P. 100 mg, Benzyl Alcohol (as preservative) I.P. 2.0% v/v, Water for Injection I.P. q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dark place. Protect from light. Do not freeze."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OCUMIN-GOLD",
    "slug": "ocumin-gold",
    "image": "/OCUMIN-GOLD.jpg",
    "section": "Injection",
    "classification": "Vitamin Supplement",
    "formulation": "Injection (Ampoules)",
    "packing": "5x1 ml",
    "mrp": "",
    "description": "OCUMIN-GOLD is a Methylcobalamin Injection. FOR IM/IV USE ONLY.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 1 ml contains: Methylcobalamin 1500 mcg (details from similar products, not visible on box)."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dark place."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },{
    "name": "Ocumik-500",
    "slug": "ocumik-500",
    "image": "/OCUMIK-500.jpg",
    "section": "Injection",
    "classification": "Antibiotic",
    "formulation": "Injection IP",
    "packing": "2 ml",
    "mrp": "",
    "description": "Amikacin Sulphate Injection IP. For I.M. / I.V. USE.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 2 ml. contains: Amikacin Sulphate I.P. equivalent to Amikacin 500 mg, Methyl Paraben I.P. 0.18% w/v (As preservative), Propyl Paraben I.P. 0.02% w/v (As preservative), Water for Injection I.P. q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Do not allow to freeze. Keep medicine out of the reach of children."
      },
      {
        "heading": "Manufactured By",
        "content": "OSCAR REMEDIES PVT. LTD."
      }
    ]
  },
  {
    "name": "Ocumin",
    "slug": "ocumin-injection",
    "image": "/OCUMIN.jpg",
    "section": "Injection",
    "classification": "Vitamin Supplement",
    "formulation": "Injection",
    "packing": "1 Ampoule of 2 ml",
    "mrp": "₹70.00",
    "description": "Methylcobalamin, Pyridoxine HCl & Nicotinamide Injection. WITH STERILE DISPO PACK. FOR IM / IV Infusion only.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 2ml Contains: Methylcobalamin I.P. 1000 mcg, Pyridoxine HCl I.P. 100 mg, Nicotinamide I.P. 100 mg, Benzyl Alcohol (as preservative) I.P. 2.0% v/v, Water for Injection I.P. q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dark place. Protect from light. Do not freeze."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "O-Dic Gel",
    "slug": "o-dic-gel",
    "image": "/O-DIC GEL.jpg",
    "section": "Special Products",
    "classification": "Topical Pain Relief",
    "formulation": "Gel",
    "packing": "30gm",
    "mrp": "",
    "description": "Linseed Oil, Diclofenac Diethylamine, Methyl Salicylate & Menthol Gel. For quick Relief from Pain, Swelling & Inflammation.",
    "details": [
      {
        "heading": "Composition",
        "content": "Linseed Oil B.P. 3% w/w, Diclofenac Diethylamine I.P. 1.16% w/w (Eq. to Diclofenac Sodium 1% w/w), Methyl Salicylate I.P. 10% w/w, Menthol I.P. 5% w/w, Benzyl Alcohol I.P. 1% w/w (As preservative), Gel base q.s."
      },
      {
        "heading": "Dosage",
        "content": "To be applied 3 to 4 times a day."
      },
      {
        "heading": "Storage",
        "content": "Store at a temperature below 25°C. Do not freeze. Keep the tube tightly closed after each use."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "Ocu-Derm",
    "slug": "ocu-derm",
    "image": "/OCU-DERM.jpg",
    "section": "Special Products",
    "classification": "Topical Cream",
    "formulation": "Cream",
    "packing": "15gm",
    "mrp": "",
    "description": "Ofloxacin, Ornidazole, Itraconazole & Clobetasol Propionate Cream.",
    "details": [
      {
        "heading": "Composition",
        "content": "Ofloxacin IP 0.75% w/w, Ornidazole IP 2.0% w/w, Itraconazole IP 1.0% w/w, Clobetasol Propionate IP 0.05% w/w, Methylparaben (as preservative) IP 0.2% w/w, Propylparaben (as preservative) IP 0.02% w/w, In a non-greasy Base."
      },
      {
        "heading": "Dosage",
        "content": "To be applied locally on the affected area as directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store at a temperature below 25°C. Do not freeze. Keep the cap tightly closed after each use."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "ADOVIT GOLD Protein Powder",
    "slug": "adovit-gold-protein-powder",
    "image": "/ADOVIT GOLD POWDER.jpg",
    "section": "Special Products",
    "classification": "Nutritional Supplement",
    "formulation": "Protein Powder",
    "packing": "200 gm",
    "mrp": "",
    "description": "L-Lysine, N-Acetyl Cyteine, Multivitamin & Antioxidant Powder. Kesar Pista Flavour.",
    "details": [
      {
        "heading": "Composition",
        "content": "Nutritional Information per 100g (Approx): Energy 374 kcal, Protein 10 g, Carbohydrate 81 g, Fat 1 g, L-Lysine 5 mg, N-Acetylcysteine 100 mg, Vitamin C 25 mg, Niacinamide 12 mg, Vitamin E 10 mg, Vitamin B5 5 mg, Vitamin B2 1.2 mg, Vitamin B1 1 mg, Vitamin B6 1 mg, Vitamin A 2000 IU, Folic Acid 100 mcg, Biotin 10 mcg, Vitamin D2 200 IU, Vitamin B12 1 mcg, Zinc 10 mg, Iron 10 mg, Magnesium 10 mg, Copper 0.5 mg, Manganese 1 mg, Iodine 100 mcg, Selenium 30 mcg."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Keep the container tightly closed."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "Adovit-Gold",
    "slug": "adovit-gold-sachet",
    "image": "/ADOVIT GOLD.jpg",
    "section": "Special Products",
    "classification": "Nutraceutical",
    "formulation": "Powder (Sachets)",
    "packing": "10x5gm Sachets",
    "mrp": "₹650.00",
    "description": "Multi Vitamin, Carbohydrates, Amino Acids with Caffeine, Ginseng Extract & Zinc Powder. Lemon Flavour.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5g sachet contains (Approx): Lycopene 6% 5000 mcg, Lutein 10% 3000 mcg, Ginseng Extract 42.5 mg, Green Tea Extract 10 mg, Vitamin C 25 mg, Vitamin E Acetate 12.5 mg, Vitamin B1 1.5 mg, Vitamin B2 1.5 mg, Vitamin B6 1.5 mg, Folic Acid 200 mcg, Zinc 7.5 mg, Selenium 100 mcg, Caffeine 10 mg."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OCILAC aqua",
    "slug": "ocilac-aqua",
    "image": "/OCILAC.jpg",
    "section": "Special Products",
    "classification": "Probiotic",
    "formulation": "Suspension (Mini Bottles)",
    "packing": "10 Mini Bottles of 5ml each",
    "mrp": "",
    "description": "Bacillus clausii Spores Suspension. For oral use only. Do Not Inject.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5ml mini bottle contains: Bacillus clausii Spores 2 Billion spores, Purified Water q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry place."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "Nutro Gumz",
    "slug": "nutro-gumz",
    "image": "/NUTO-GUMZ.jpg",
    "section": "Special Products",
    "classification": "Nutraceutical",
    "formulation": "Gummy",
    "packing": "30 Gummy",
    "mrp": "",
    "description": "100% VEGETARIAN, GLUTEN FREE, GELATIN FREE. ORANGE FLAVOUR. Nutraceutical gummies with Lutein and Zeaxanthin.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each Vegetarian Gummy contains: Lutein (from Lutemax 2020) 2.5 mg, Zeaxanthin (from Lutemax 2020) 0.5 mg, Bilberry Extract 27.5 mg, Ascorbic Acid 30 mg, Zinc (as zinc citrate) 2.9 mg, Beta-carotene 750 mcg, Alpha-tocopheryl acetate 15 IU."
      },
      {
        "heading": "Dosage",
        "content": "Consult your Healthcare Professional. Chew gummy thoroughly and completely before swallowing."
      },
      {
        "heading": "Storage",
        "content": "Store in cool and dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "HELENE PHARMACEUTICAL-PRIVATE LIMITED"
      }
    ]
  },
  {
    "name": "ACELAR-P",
    "slug": "acelar-p",
    "image": "/ACELAR-P.jpg",
    "section": "Syrup",
    "classification": "Pain Relief",
    "formulation": "Suspension",
    "packing": "60 ml",
    "mrp": "",
    "description": "Ibuprofen & Paracetamol Suspension, used for pain relief and reducing fever.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml. contains: Ibuprofen IP 100 mg, Paracetamol IP 162.50 mg, Flavoured Suspension base q.s, Colour: Carmoisine."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Store between 2°C to 25°C temperature. Do Not Freeze."
      },
      {
        "heading": "Manufactured By",
        "content": "SUZITEC ORGANICS"
      }
    ]
  },
  {
    "name": "CFD",
    "slug": "cfd-dry-syrup",
    "image": "/CFD.jpg",
    "section": "Syrup",
    "classification": "Antibiotic",
    "formulation": "Dry Syrup (Oral Suspension)",
    "packing": "12gm/30ml",
    "mrp": "",
    "description": "Cefpodoxime Proxetil Oral Suspension IP. WITH STERILE WATER FOR RECONSTITUTION. FOR PAEDIATRIC USE.",
    "details": [
      {
        "heading": "Composition",
        "content": "Cefpodoxime Proxetil Oral Suspension IP. (Composition per 5ml not visible)."
      },
      {
        "heading": "Dosage",
        "content": "SHAKE WELL BEFORE USE. FOR PAEDIATRIC USE. As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry place."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACRITICALS"
      }
    ]
  },
  {
    "name": "COLITIME",
    "slug": "colitime",
    "image": "/COLITIME.jpg",
    "section": "Syrup",
    "classification": "Antibiotic",
    "formulation": "For Oral Suspension I.P. (Dry Powder)",
    "packing": "12gm/30ml",
    "mrp": "",
    "description": "Colistin Sulphate For Oral Suspension I.P. Mango Flavour. POWDER WITH STERILE WATER FOR ORAL SUSPENSION.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml. after reconstitution Suspension Contains: Colistin Sulphate I.P. Eq. to Colistin 12.5 mg, Excipients q.s., In a flavoured base, Colour: Sunset Yellow."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from light & moisture. Keep all medicines out of reach of children."
      }
    ]
  },
  {
    "name": "Dasdryl",
    "slug": "dasdryl",
    "image": "/DASDRYL.jpg",
    "section": "Syrup",
    "classification": "Cough Syrup",
    "formulation": "Cough Formula Syrup",
    "packing": "100 ml",
    "mrp": "",
    "description": "Diphenhydramine Hydrochloride, Ammonium Chloride, Sodium Citrate & Menthol Syrup. For cough, sneezing, runny nose, sore throat.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml contains: Diphenhydramine Hydrochloride IP 14.08 mg, Ammonium Chloride IP 138 mg, Sodium Citrate IP 57.03 mg, Menthol IP 1.14 mg, In a Flavoured syrupy base. Colour: Carmoisine, Sunset Yellow FCF."
      },
      {
        "heading": "Dosage",
        "content": "Children 2 to 5 years: 1/2 Teaspoonful (2.5ml), 6-12 years: 1 Teaspoonful (5.0ml), Over 12 years & Adults: 2 Teaspoonfuls (10ml). Dose to be taken every 4 hours."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. At a temperature not exceeding 25°C. Protect from direct light & moisture."
      },
      {
        "heading": "Manufactured By",
        "content": "Aayush Healthcare"
      }
    ]
  },
  {
    "name": "Gutpedia-Z",
    "slug": "gutpedia-z",
    "image": "/GUTPEDIA-Z.jpg",
    "section": "Syrup",
    "classification": "Probiotic & Multivitamin",
    "formulation": "Dry Syrup (Oral Suspension)",
    "packing": "30 ml",
    "mrp": "",
    "description": "Lactic Acid Bacillus Spores, B-Complex with Zinc for Oral Suspension. NUTRACEUTICAL. FOR PAEDIATRIC USE ONLY.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each serving (5 ml) contains: Lactic Acid Bacillus 60 million, L-Methyl Folate 300 mcg, Niacinamide 18 mg, Pyridoxine Hydrochloride 2 mg, Riboflavin 1.6 mg, Thiamine Mononitrate 1.4 mg, Biotin 150 mcg, Zinc 10 mg."
      },
      {
        "heading": "Dosage",
        "content": "Direction for use: As directed by the health expert."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place below 25°C. Protect from direct sunlight."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "GYNO-FM",
    "slug": "gyno-fm",
    "image": "/GYNO-FM.jpg",
    "section": "Syrup",
    "classification": "Ayurvedic Uterine Tonic",
    "formulation": "Syrup (Ayurvedic)",
    "packing": "200 ml",
    "mrp": "₹239.00",
    "description": "Ayurvedic Syrup. Relief from irregular menses, leucorrhoea and Infertility. Pineapple Flavour.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml. contains: Ashok Chhal (Saraca indica) 250 mg, Ashwagandha (Withania somnifera) 200 mg, Shatavari (Asparagus racemosus) 150 mg, Lodhra (Symplocos racemosa) 125 mg, Dashmool 75 mg, Jamun chhal (Plato comblila) 70 mg, Vasa (Adhatoda vasica) 75 mg, Guduchi (Tinospora cordifolia) 75 mg, Gokshura (Tribulus terrestris) 50 mg, Chitrak mool (Plumbago zeylanica) 45 mg, Sounf (Anisum catechu) 45 mg, Jeevanti (Dendrobium macrei) 40 mg, Daru haldi (Berberis aristata) 35 mg, Rakt Chandan (Pterocarpus santalinus) 25 mg, Machras (Bombax malbaricum) 25 mg, Lodh (Symplocos racemosa) 25 mg, Chirayata (Swertia chirata) 20 mg, Haritaki (Terminalia chebula) 20 mg, Bael (Aegle marmelos) 10 mg, Base q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician. SHAKE WELL BEFORE USE."
      },
      {
        "heading": "Storage",
        "content": "STORE IN COOL & DRY PLACE. DO NOT FREEZE."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "H ZIN-M",
    "slug": "h-zin-m-syrup",
    "image": "/H-ZIN M.jpg",
    "section": "Syrup",
    "classification": "Anti-allergic",
    "formulation": "Syrup",
    "packing": "60 ml",
    "mrp": "",
    "description": "Montelukast & Levocetirizine Dihydrochloride Syrup.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml contains: Levocetirizine Dihydrochloride IP 2.5 mg, Montelukast Sodium IP eq. to Montelukast 4.0 mg, In a flavoured syrup base q.s., Colour: Sunset Yellow FCF."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. At a temperature not exceeding 25°C. Protect from direct light & heat."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Happy D3 Drops",
    "slug": "happy-d3",
    "image": "/HAPPY-D3.jpg",
    "section": "Syrup",
    "classification": "Vitamin Supplement",
    "formulation": "Oral Drop",
    "packing": "30 ml",
    "mrp": "",
    "description": "Cholecalciferol (Vitamin D3) with DHA Oral Drop. With the added benefits of DHA. \"The Sunshine vitamin in just one drop\".",
    "details": [
      {
        "heading": "Composition",
        "content": "Each ml. contains (Approximate value) per ml.: DHA 100 mg, Vitamin D3 800 I.U., In a flavoured syrupy base q.s., Colour: Sunset Yellow, Flavour: Vanilla."
      },
      {
        "heading": "Dosage",
        "content": "Usage: As directed by the physician/health care practitioner."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Below 25°C. Protect from direct light & moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCCULAR"
      }
    ]
  },
  {
    "name": "Larcyp",
    "slug": "larcyp",
    "image": "/LARCYP.jpg",
    "section": "Syrup",
    "classification": "Appetite Stimulant",
    "formulation": "Syrup",
    "packing": "200 ml",
    "mrp": "₹110.00",
    "description": "Cyproheptadine Hydrochloride & Tricholine Citrate Syrup.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml contains: Cyproheptadine Hydrochloride IP 2 mg, Tricholine Citrate Sol. (65%) 275 mg, Flavoured Syrup Base q.s., Colour: Sunset Yellow FCF."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Store between 20°C to 25°C temperature. DO NOT FREEZE."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "RD-Health",
    "slug": "rd-health",
    "image": "/FELARVIT.jpg",
    "section": "Syrup",
    "classification": "Multivitamin & Multimineral",
    "formulation": "Syrup",
    "packing": "200 ml",
    "mrp": "",
    "description": "Lycopene, Niacinamide, Pyridoxine Hydrochloride, Folic Acid, Biotin, Zinc Sulphate, Iodine, Cyanocobalamin, L-lysine Mono Hcl, Sodium Selenate & Choline Bitartrate Syrup. MIX FRUIT FLAVOUR.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each serving (10 ml) contains: Lycopene 6% 2000 mcg, Niacinamide 11 mg, Pyridoxine Hydrochloride 1 mg, Folic Acid 100 mcg, Biotin 12 mcg, Zinc Sulphate 3.3 mg, Iodine 110 mcg, L-Lysine Mono Hcl 50 mg, Sodium Selenate 10 mcg, Choline Bitartrate 10 mg."
      },
      {
        "heading": "Dosage",
        "content": "Recommended Usage: As directed by the health expert."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Protect from direct light & moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OCLAR-SM",
    "slug": "oclar-sm",
    "image": "/OCILAR-SM.jpg",
    "section": "Syrup",
    "classification": "Antibiotic & Antidiarrheal",
    "formulation": "Suspension",
    "packing": "60 ml",
    "mrp": "",
    "description": "Ofloxacin, Metronidazole Benzoate & Simethicone Suspension used to treat gastrointestinal infections. FOR PAEDIATRIC USE.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml contains: Ofloxacin IP 50 mg, Metronidazole Benzoate IP eq. to Metronidazole 120 mg, Simethicone IP 10 mg, In a flavoured suspension base q.s., Colour: Quinoline Yellow."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in cool, dry & dark place. At a temperature not exceeding 25°C. Protect from direct light & moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocikof-LS Junior",
    "slug": "ocikof-ls-junior",
    "image": "/OCIKOF-LS JUNIOR.jpg",
    "section": "Syrup",
    "classification": "Expectorant",
    "formulation": "Syrup",
    "packing": "60 ml",
    "mrp": "₹80.00",
    "description": "Ambroxol Hydrochloride, Levosalbutamol Sulphate & Guaiphenesin Syrup. Expectorant.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml. contains: Ambroxol Hydrochloride I.P. 15 mg, Levosalbutamol Sulphate I.P. Eq. to Levosalbutamol 0.5 mg, Guaiphenesin I.P. 50 mg, Excipients q.s., In flavoured syrupy base, Colour: Ponceau 4R."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Protect from direct sunlight."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ociplat",
    "slug": "ociplat-100ml",
    "image": "/OCIPLAT 100 ML.jpg",
    "section": "Syrup",
    "classification": "Ayurvedic Platelet Booster",
    "formulation": "Syrup (Ayurvedic)",
    "packing": "100 ml",
    "mrp": "",
    "description": "100% Natural Ayurvedic syrup that Increases Platelet Count, Builds Immunity, and Promotes faster recovery.",
    "details": [
      {
        "heading": "Composition",
        "content": "(Composition details not visible on this panel, likely contains Papaya leaf and other herbal extracts)."
      },
      {
        "heading": "Dosage",
        "content": "SHAKE WELL BEFORE USE. (Dosage not specified on this panel)."
      },
      {
        "heading": "Storage",
        "content": "STORE IN A COOL & DRY PLACE. KEEP AWAY FROM DIRECT SUNLIGHT. KEEP AWAY FROM REACH OF CHILDREN."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocimef-P",
    "slug": "ocimef-p",
    "image": "/OCIMEF-P.jpg",
    "section": "Syrup",
    "classification": "Pain Relief",
    "formulation": "Suspension",
    "packing": "60 ml",
    "mrp": "",
    "description": "Mefenamic Acid & Paracetamol Suspension used for pain relief and to reduce fever.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml. contains: Mefenamic Acid I.P. 50 mg, Paracetamol I.P. 125 mg, Excipients q.s., In a flavoured syrupy base, Colour: Tartrazine."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Protect from direct sunlight. Keep the medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocimef-DS",
    "slug": "ocimef-ds",
    "image": "/OCIMEF-DS.jpg",
    "section": "Syrup",
    "classification": "Pain Relief",
    "formulation": "Suspension",
    "packing": "60 ml",
    "mrp": "",
    "description": "Mefenamic Acid & Paracetamol Suspension (Double Strength). For Paediatric Use.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml. contains: Mefenamic Acid I.P. 100 mg, Paracetamol I.P. 250 mg, Excipients q.s., In a flavoured syrupy base, Colour: Erythrosine."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Protect from direct sunlight. Keep all medicines out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocikold",
    "slug": "ocikold",
    "image": "/OCIKOLD.jpg",
    "section": "Syrup",
    "classification": "Cold & Allergy",
    "formulation": "Suspension",
    "packing": "60 ml",
    "mrp": "",
    "description": "Paracetamol, Phenylephrine Hydrochloride, Chlorpheniramine Maleate, Sodium Citrate & Menthol Suspension for cold relief.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml contains: Paracetamol IP 125 mg, Phenylephrine Hydrochloride IP 5 mg, Chlorpheniramine Maleate IP 0.5 mg, Sodium Citrate IP 60 mg, Menthol IP 1 mg, Flavoured suspension base q.s., Colour: Carmoisine."
      },
      {
        "heading": "Dosage",
        "content": "As Directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in cool, dry & dark place. At a temperature not exceeding 25°C. Protect from direct light & heat."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocipara-98",
    "slug": "ocipara-98",
    "image": "/OCIPARA-98.jpg",
    "section": "Syrup",
    "classification": "Fever & Pain Relief",
    "formulation": "Paediatric Oral Suspension IP",
    "packing": "60 ml",
    "mrp": "",
    "description": "Paracetamol Paediatric Oral Suspension IP. With Double Strength. Mango Flavour. FOR PAEDIATRIC USE ONLY.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5ml contains: Paracetamol IP 250 mg, In a flavoured base q.s., Colour: Sunset Yellow FCF."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store at a temperature below 25°C. Protect from direct sunlight. Keep the cap tightly closed after each use."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocinac-P",
    "slug": "ocinac-p-suspension",
    "image": "/OCINAC-P.jpg",
    "section": "Syrup",
    "classification": "Pain Relief",
    "formulation": "Suspension",
    "packing": "60 ml",
    "mrp": "₹60.00",
    "description": "Mefenamic Acid & Paracetamol Suspension used for pain relief and fever.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5ml contains: Mefenamic Acid I.P. 50 mg, Paracetamol I.P. 125 mg, Flavoured Palatable base q.s., Colour: Tartrazine."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Store between 2°C to 25°C temperature. DO NOT FREEZE."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OCIFER",
    "slug": "ocifer",
    "image": "/OCIFER.jpg",
    "section": "Syrup",
    "classification": "Iron Supplement",
    "formulation": "Suspension",
    "packing": "200 ml",
    "mrp": "",
    "description": "Ferrous Ascorbate & Folic Acid Suspension. Sugar Free. Orange Flavour.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml contains: Ferrous Ascorbate eq. to Elemental Iron 30 mg, Folic Acid IP 550 mcg, Colour: Caramel."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. At a temperature not exceeding 30°C. Protect from direct light & moisture. DO NOT FREEZE."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "Ociclav-DS",
    "slug": "ociclav-ds",
    "image": "/OCICLAV-DS.jpg",
    "section": "Syrup",
    "classification": "Antibiotic",
    "formulation": "Dry Syrup (Oral Suspension)",
    "packing": "5gm/30ml",
    "mrp": "",
    "description": "Amoxycillin & Potassium Clavulanate Oral Suspension IP. Dry Syrup. FOR PAEDIATRIC USE ONLY. Comes with Sterile water for Injection.",
    "details": [
      {
        "heading": "Composition",
        "content": "Amoxycillin & Potassium Clavulanate Oral Suspension IP. (Detailed composition per 5ml not visible)."
      },
      {
        "heading": "Dosage",
        "content": "SHAKE WELL BEFORE EACH USE. As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry place. Keep the reconstituted suspension in refrigerator."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "LARPLEX",
    "slug": "larplex",
    "image": "/LARPLEX.jpg",
    "section": "Syrup",
    "classification": "Multivitamin & Multimineral",
    "formulation": "Syrup",
    "packing": "200 ml",
    "mrp": "",
    "description": "Lycopene, Multivitamin & Multimineral Syrup. Sugar Free.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 10 ml serving contains: Lycopene 10% 2000mcg, Vitamin C 50 mg, Vitamin E 10 IU, Vitamin B1 1.5 mg, Vitamin B2 1.7 mg, Vitamin B6 1.5 mg, Zinc as Zinc Sulphate 5 mg, Manganese as Manganese Gluconate 1.5 mg, Iodine as Potassium Iodide 100 mcg, Copper as Copper Sulphate 1 mg."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the health expert."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place. Protect from direct light."
      },
      {
        "heading": "Marketed By",
        "content": "OCCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OC-CYP",
    "slug": "oc-cyp",
    "image": "/OC-CYP.jpg",
    "section": "Syrup",
    "classification": "Appetite Stimulant",
    "formulation": "Syrup",
    "packing": "200 ml",
    "mrp": "₹110.00",
    "description": "Cyproheptadine Hydrochloride & Tricholine Citrate Syrup.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml contains: Cyproheptadine Hydrochloride IP 2 mg, Tricholine Citrate Sol. (65%) 275 mg, Sorbitol Base q.s., Flavoured Syrup Base. Colour: Sunset Yellow FCF."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Store between 20°C to 25°C temperature. DO NOT FREEZE."
      },
      {
        "heading": "Marketed By",
        "content": "OCCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ociplat",
    "slug": "ociplat-syrup",
    "image": "/OCIPLAT.jpg",
    "section": "Syrup",
    "classification": "Ayurvedic Platelet Booster",
    "formulation": "Syrup (Ayurvedic)",
    "packing": "200 ml",
    "mrp": "",
    "description": "An Ayurvedic Proprietary Medicine syrup that Increases Platelet Count, Builds immunity, and Promotes faster recovery.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml. contains derived extract from: Papaya (Carica papaya) 1200 mg, Mandookparni (Centella asiatica) 400 mg, Aloevera (Aloe barbadensis) 200 mg, Amla (Emblica officinalis) 200 mg, Haritaki (Terminalia chebula) 100 mg, Giloe (Tinospora cordifolia) 100 mg, Methi dana (Trigonella foenum) 100 mg, Kiwi (Actinidia deliciosa) 100 mg, Punernava (Boerhavia diffusa) 100 mg, Tulsi (Ocimum sanctum) 100 mg, Trikatu 100 mg, Flavoured syrup base q.s., Preservatives: Sodium methyl paraben & Sodium Propyl Paraben."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place."
      },
      {
        "heading": "Manufactured By",
        "content": "Zoic Pharmaceuticals"
      }
    ]
  },
  {
    "name": "OCIZYME",
    "slug": "ocizyme-tonic",
    "image": "/OCIZYME.jpg",
    "section": "Syrup",
    "classification": "Digestive Tonic",
    "formulation": "Digestive Tonic (Ayurvedic Syrup)",
    "packing": "200ml",
    "mrp": "",
    "description": "Chat Pata Ayurvedic Syrup Enriched with Herbal Digestive Enzyme. For Impaired Digestion. Stimulates Metabolic Function.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml. contains derived extract from: Papaya whole (Carica papaya) 50 mg, Ajwain (Trachyspermum ammi) 20 mg, Pippli (Piper longum) 20 mg, Rasna (Pluchea lanceolata) 15 mg, Dalchini (Cinnamomum zeylanicum) 5 mg, Elaichi (Elettaria cardamomum) 5 mg, Harde (Terminalia chebula) 5 mg, Vidang (Embelia ribes) 5 mg, Amal Vet (Garcinia pedunculata) 5 mg, Nagarmoth (Cyperus scariosus) 5 mg. Preservatives: Sodium Methyl Paraben & Sodium Propyl Paraben."
      },
      {
        "heading": "Dosage",
        "content": "CHILDREN: 1 teaspoonful 2-3 times a day. ADULTS: 2 teaspoonful 2-3 times a day. Or as directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "SHAKE WELL BEFORE USE. STORE IN COOL & DRY PLACE."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "O-CORT",
    "slug": "o-cort-suspension",
    "image": "/O-CORT.jpg",
    "section": "Syrup",
    "classification": "Corticosteroid",
    "formulation": "Suspension",
    "packing": "30 ml",
    "mrp": "",
    "description": "Deflazacort Suspension used to treat inflammation, severe allergies, and chronic conditions.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml contains: Deflazacort 6 mg, Excipients q.s., In a palatable suspension base q.s., Colour: Sunset Yellow FCF."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. At a temperature not exceeding 25°C. Protect from direct light & moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocucof-LS",
    "slug": "ocucof-ls",
    "image": "/OCUCOF-LS.jpg",
    "section": "Syrup",
    "classification": "Expectorant",
    "formulation": "Syrup",
    "packing": "100ml",
    "mrp": "",
    "description": "Levosalbutamol Sulphate, Ambroxol Hydrochloride & Guaiphenesin Syrup. Sugar Free. Relief From Cough.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5ml. Contains: Levosalbutamol Sulphate IP Eq. to Levosalbutamol 1 mg, Ambroxol Hydrochloride IP 30 mg, Guaiphenesin IP 50 mg, In Sorbitol base q.s., Colour: Ponceau-4R."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in cool, dry & dark place. At a temperature not exceeding 25°C. Protect from direct light & heat."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocupod-50",
    "slug": "ocupod-50",
    "image": "/OCUPOD-50.jpg",
    "section": "Syrup",
    "classification": "Antibiotic",
    "formulation": "Dry Syrup (Oral Suspension IP)",
    "packing": "10gm/30ml",
    "mrp": "",
    "description": "Cefpodoxime Oral Suspension IP. FOR PAEDIATRIC USE ONLY. with sterile water for reconstitution.",
    "details": [
      {
        "heading": "Composition",
        "content": "Cefpodoxime Oral Suspension IP 50 mg / 5ml (Implied from name). This pack contains sterile water for reconstitution."
      },
      {
        "heading": "Dosage",
        "content": "SHAKE WELL BEFORE EACH USE. As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store Reconstituted suspension in refrigerator. Use the prepared suspension within 5 days. Keep all medicines out of reach of children."
      },
      {
        "heading": "Manufactured By",
        "content": "Artison Anthems"
      }
    ]
  },
  {
    "name": "Ocucof-D",
    "slug": "ocucof-d",
    "image": "/OCUCOF-D.jpg",
    "section": "Syrup",
    "classification": "Cough Syrup",
    "formulation": "Syrup",
    "packing": "100 ml",
    "mrp": "",
    "description": "Dextromethorphan HBr, Phenylephrine HCL & Chlorpheniramine Maleate Syrup.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5ml Contains: Dextromethorphan Hydrobromide IP 10 mg, Phenylephrine Hydrochloride IP 5 mg, Chlorpheniramine Maleate IP 2 mg, Flavoured Syrupy base q.s., Colour: Sunset Yellow."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry place. At a temperature not exceeding 30°C. Protect from light."
      },
      {
        "heading": "Manufactured By",
        "content": "R.R. Remedies"
      }
    ]
  },
  {
    "name": "Oculid",
    "slug": "oculid",
    "image": "/OCULID.jpg",
    "section": "Syrup",
    "classification": "Antibiotic",
    "formulation": "Dry Syrup (Oral Suspension)",
    "packing": "12gm/30 ml",
    "mrp": "",
    "description": "Linezolid for Oral Suspension. POWDER WITH STERILE WATER FOR ORAL SUSPENSION.",
    "details": [
      {
        "heading": "Composition",
        "content": "Linezolid for Oral Suspension. (This pack contains sterile water for reconstitution)."
      },
      {
        "heading": "Dosage",
        "content": "SHAKE WELL BEFORE USE. As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry place."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACRITICALS"
      }
    ]
  },
  {
    "name": "Ocucof-AM",
    "slug": "ocucof-am",
    "image": "/OCUCOF-AM.jpg",
    "section": "Syrup",
    "classification": "Cough Syrup (Expectorant)",
    "formulation": "Syrup",
    "packing": "100 ml",
    "mrp": "₹95.00",
    "description": "Ambroxol Hydrochloride, Terbutaline Sulphate, Guaiphenesin & Menthol Syrup. Mix Fruit Flavour.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5ml. Contains: Ambroxol Hydrochloride I.P. 15 mg, Terbutaline Sulphate I.P. 1.25 mg, Guaiphenesin I.P. 50 mg, Menthol I.P. 1 mg, In a flavoured syrupy base q.s., Colour: Brilliant Blue & Tartrazine."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dark & dry place below 25°C. Do not freeze."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocucid-Z",
    "slug": "ocucid-z",
    "image": "/OCUCID-Z.jpg",
    "section": "Syrup",
    "classification": "Antacid & Antigas",
    "formulation": "Oral Suspension IP",
    "packing": "170 ml",
    "mrp": "",
    "description": "Magaldrate & Simethicone Oral Suspension IP. Sugar Free.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml contains: Magaldrate (Anhydrous) IP 400 mg, Simethicone IP 20 mg, Sorbitol Solution (70%) IP (Non-Crystallising), In a flavoured syrupy base, Colour: Brilliant Blue & Tartrazine."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in cool, dry & dark place. At a temperature not exceeding 25°C. Protect from direct light & heat."
      },
      {
        "heading": "Manufactured By",
        "content": "Aayush Healthcare"
      }
    ]
  },
  {
    "name": "Ocucet-LM",
    "slug": "ocucet-lm-syrup",
    "image": "/OCUCET-LM.jpg",
    "section": "Syrup",
    "classification": "Anti-allergic",
    "formulation": "Syrup",
    "packing": "60 ml",
    "mrp": "",
    "description": "Levocetirizine Dihydrochloride & Montelukast Sodium Syrup.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml. contains: Levocetirizine Dihydrochloride I.P. 2.5 mg, Montelukast Sodium I.P. Eq. to Montelukast 4 mg, Excipients q.s., In a flavoured syrupy base, Colour: Ponceau 4R."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry and dark place. Protect from direct sunlight."
      },
      {
        "heading": "Manufactured By",
        "content": "Sapphire Life Sciences"
      }
    ]
  },
  {
    "name": "Ocucef",
    "slug": "ocucef-dry-syrup",
    "image": "/OCUCEF.jpg",
    "section": "Syrup",
    "classification": "Antibiotic with Probiotic",
    "formulation": "Dry syrup (Oral Suspension)",
    "packing": "10gm/30ml",
    "mrp": "",
    "description": "Cefixime with Lactic Acid Bacillus Oral Suspension. with sterile water for reconstitution.",
    "details": [
      {
        "heading": "Composition",
        "content": "Cefixime with Lactic Acid Bacillus Oral Suspension. (Detailed composition per 5ml not visible)."
      },
      {
        "heading": "Dosage",
        "content": "Direction for Reconstitution: Shake the bottle well to loosen the powder. Twist to open the ampoule of sterile water. Add the water to the bottle and shake well. Adjust the volume up to the mark."
      },
      {
        "heading": "Storage",
        "content": "Keep the bottle well closed after each use. Store Reconstituted suspension in refrigerator. Use the prepared suspension within 5 days."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OCUCOF-LS Junior",
    "slug": "ocucof-ls-junior",
    "image": "/OCUCOF-LS JUNIOR.jpg",
    "section": "Syrup",
    "classification": "Expectorant",
    "formulation": "Syrup",
    "packing": "60 ml",
    "mrp": "₹80.00",
    "description": "Ambroxol Hydrochloride, Levosalbutamol Sulphate & Guaiphenesin Syrup. Expectorant.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml. contains: Ambroxol Hydrochloride I.P. 15 mg, Levosalbutamol Sulphate I.P. Eq. to Levosalbutamol 0.5 mg, Guaiphenesin I.P. 50 mg, Excipients q.s., In flavoured syrupy base, Colour: Ponceau 4R."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Protect from direct sunlight."
      },
      {
        "heading": "Manufactured By",
        "content": "Sapphire Life Sciences"
      }
    ]
  },
  {
    "name": "Ocupod-100",
    "slug": "ocupod-100",
    "image": "/OCUPOD-100.jpg",
    "section": "Syrup",
    "classification": "Antibiotic",
    "formulation": "Dry Syrup (Oral Suspension I.P.)",
    "packing": "12 gm/30 ml",
    "mrp": "",
    "description": "Cefpodoxime For Oral Suspension I.P. Dry Syrup. Powder With Sterile Water For Oral Suspension. For Paediatric Use Only.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5ml of reconstituted suspension contains: Cefpodoxime Proxetil IP eq. to Cefpodoxime 100 mg (Implied from name). This pack contains sterile water for reconstitution."
      },
      {
        "heading": "Dosage",
        "content": "SHAKE WELL BEFORE USE. As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Keep all medicines out of reach of children. Store reconstituted suspension in refrigerator."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OCUPOD-CV",
    "slug": "ocupod-cv",
    "image": "/OCUPOD-CV.jpg",
    "section": "Syrup",
    "classification": "Antibiotic",
    "formulation": "Dry Syrup (Oral Suspension)",
    "packing": "5gm/30ml",
    "mrp": "",
    "description": "Cefpodoxime & Potassium Clavulanate Oral Suspension. Dry Syrup. For Paediatric Use.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml of the reconstituted suspension contains: Cefpodoxime Proxetil IP Eq. to Cefpodoxime 50mg, Potassium Clavulanate Diluted IP Eq. to Clavulanic Acid 31.25mg, Excipients q.s., In a flavoured base, Colour: Sunset Yellow FCF."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician. SHAKE WELL BEFORE EACH USE."
      },
      {
        "heading": "Storage",
        "content": "Store at a temperature below 25°C. Protect from light & moisture. Keep the medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OCUSIP-L",
    "slug": "ocusip-l",
    "image": "/OCUSIP-L.jpg",
    "section": "Syrup",
    "classification": "Vitamin Supplement",
    "formulation": "Syrup",
    "packing": "100 ml",
    "mrp": "₹50.00",
    "description": "Vitamin B-Complex & L-Lysine Syrup. Nutritional Information (Approximate values).",
    "details": [
      {
        "heading": "Composition",
        "content": "Each serving (10 ml) Contains (Approximate): Pyridoxine HCl 1 mg, Niacinamide 15 mg, Cyanocobalamin 1 mcg, L-Lysine HCl 150 mg, Folic Acid 100 mcg, Riboflavin (as Sod. Phosphate) 1.2 mg, Thiamine Mononitrate 1.1 mg, Manganese Gluconate (as Mn) 0.5 mg."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the health expert."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Protect from direct sunlight."
      },
      {
        "heading": "Marketed By",
        "content": "Ocular Pharmaceuticals Pvt. Ltd."
      }
    ]
  },
  {
    "name": "O-VOM",
    "slug": "o-vom",
    "image": "/O-VOM.jpg",
    "section": "Syrup",
    "classification": "Antiemetic",
    "formulation": "Syrup",
    "packing": "30 ml",
    "mrp": "",
    "description": "Ondansetron Hydrochloride Syrup used to prevent nausea and vomiting.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5 ml Contains: Ondansetron Hcl IP Equivalent to Ondansetron 2 mg, In flavoured Palatable base q.s., Colour: Sunset Yellow FCF."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Store between 20°C to 25°C temperature. DO NOT FREEZE."
      },
      {
        "heading": "Manufactured By",
        "content": "SUZITEC ORGANICS"
      }
    ]
  },
  {
    "name": "Ocuzinc",
    "slug": "ocuzinc",
    "image": "/OCUZINC.jpg",
    "section": "Syrup",
    "classification": "Probiotic & Multivitamin",
    "formulation": "Dry Syrup (Oral Suspension)",
    "packing": "60 ml",
    "mrp": "",
    "description": "Lactic Acid Bacillus Spores, B-Complex with Zinc for Oral Suspension. NUTRACEUTICAL. For Paediatric use only.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each serving 5 ml contains (Approx. Value): Lactic Acid Bacillus 60 million, L-Methyl Folate 300 mcg, Niacinamide 18 mg, Zinc Sulphate 12 mg, Riboflavin 1.6 mg, Pyridoxine Hydrochloride 1.5 mg, Thiamine Mononitrate 1.4 mg, Cyanocobalamin 1 mcg."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the health expert. SHAKE WELL BEFORE USE."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place below 25°C. Protect from direct sunlight."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "OZT-200",
    "slug": "ozt-200",
    "image": "/OZT-200.jpg",
    "section": "Syrup",
    "classification": "Antibiotic",
    "formulation": "Oral Suspension IP",
    "packing": "15ml",
    "mrp": "",
    "description": "Azithromycin Oral Suspension IP 200 mg. For Paediatric Use Only.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 5ml contains: Azithromycin Dihydrate IP Eq. to Anhydrous Azithromycin 200 mg, In a flavoured suspension base q.s., Colour: Quinoline Yellow."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in cool, dry & dark place. At a temperature not exceeding 25°C. Protect from direct light & heat."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "RD-LIV",
    "slug": "rd-liv",
    "image": "/RD-LIV.jpg",
    "section": "Syrup",
    "classification": "Liver Support",
    "formulation": "Syrup",
    "packing": "200 ml",
    "mrp": "₹130.00",
    "description": "Silymarin, L-Ornithine L-Aspartate with B-Complex Syrup.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each 10 ml Contains (Approx.): Silymarin 40% 70 mg, L-Ornithine L-Aspartate 125 mg, Tricholine Citrate 100 mg, Thiamine HCl 2 mg, Riboflavin 2 mg, Pyridoxine HCl 1.5 mg, Niacinamide 15 mg, D-Panthenol 5 mg, Protein 10% 30 mg, Enzyme 10 mg."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Healthcare Professional. SHAKE WELL BEFORE USE."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dark & dry place. Protect from direct sunlight & moisture."
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
    "formulation": "Tablets",
    "packing": "10x10 Tablets",
    "mrp": "₹230.00",
    "description": "Cefpodoxime Proxetil Tablets, an antibiotic used to treat a wide variety of bacterial infections.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Cefpodoxime Proxetil IP eq. to Cefpodoxime 200 mg, Excipients q.s., Colour: Titanium Dioxide IP."
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
    "name": "OCITHER-LF",
    "slug": "ocither-lf",
    "image": "/OCITHER.jpg",
    "section": "Tablet",
    "classification": "Antimalarial",
    "formulation": "Tablets",
    "packing": "10x6 Tablets",
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
    "name": "ACELAR PLUS",
    "slug": "acelar-plus",
    "image": "/ACELAR-PLUS.jpg",
    "section": "Tablet",
    "classification": "Pain Relief",
    "formulation": "Tablets",
    "packing": "10 x 10 Tablets",
    "mrp": "₹55.00",
    "description": "ACELAR PLUS is a combination of Aceclofenac and Paracetamol tablets, used for pain relief and reducing inflammation.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Aceclofenac IP 100 mg, Paracetamol IP 325 mg, Excipients q.s., COLOUR: Red Oxide of Iron."
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
    "formulation": "Tablets",
    "packing": "10 x 10 Tablets",
    "mrp": "₹110.00",
    "description": "Ocinac-SP is a combination tablet containing Aceclofenac, Paracetamol, and Serratiopeptidase, used for relieving pain, inflammation, and swelling.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Aceclofenac IP 100 mg, Paracetamol IP 325 mg, Serratiopeptidase IP 15 mg (eq. to 30,000 units of enzyme activity) (as enteric coated granules), Excipients q.s. Colour: Sunset Yellow lake."
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
    "formulation": "Tablets IP",
    "packing": "10 x 10 Tablets",
    "mrp": "₹89.00",
    "description": "Ocilar-OZ is a combination tablet containing Ofloxacin and Ornidazole, used to treat bacterial and parasitic infections, particularly gastrointestinal infections.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Ofloxacin I.P. 200 mg, Ornidazole I.P. 500 mg, Excipients q.s., Colour: Sunset Yellow."
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
    "name": "H-ZIN-M",
    "slug": "h-zin-m",
    "image": "/H-ZIN M.jpg",
    "section": "Tablet",
    "classification": "Anti-allergic",
    "formulation": "Tablets",
    "packing": "10x10 Tablets",
    "mrp": "₹130.00",
    "description": "H-ZIN M is a combination medication of Montelukast Sodium and Levocetirizine Hydrochloride, used to relieve symptoms of allergies.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film-coated tablet contains: Montelukast Sodium IP eq. to Montelukast 10 mg, Levocetirizine Dihydrochloride IP 5 mg, Excipients q.s., Colour: Titanium Dioxide IP."
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
    "name": "Ocinac-Plus",
    "slug": "ocinac-plus",
    "image": "/OCINACPLUS.jpg",
    "section": "Tablet",
    "classification": "Pain Relief",
    "formulation": "Tablets",
    "packing": "10 x 10 Tablets",
    "mrp": "₹55.00",
    "description": "Ocinac-Plus contains Aceclofenac and Paracetamol, used as a painkiller to relieve pain and inflammation.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Aceclofenac IP 100 mg, Paracetamol IP 325 mg, Excipients q.s., COLOUR: Titanium Dioxide IP."
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
    "name": "Ocitop-40",
    "slug": "ocitop-40",
    "image": "/OCITOP-40.jpg",
    "section": "Tablet",
    "classification": "Gastrointestinal",
    "formulation": "Gastro-resistant Tablets IP",
    "packing": "10 x 10 Tablets",
    "mrp": "₹99.00",
    "description": "Ocitop-40 contains Pantoprazole, a proton pump inhibitor that reduces acid production in the stomach. Used for acid reflux and ulcers.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each enteric coated tablet contains: Pantoprazole Sodium IP eq. to Pantoprazole 40 mg, Excipients q.s., Colour: Yellow Oxide of Iron."
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
    "name": "ACELAR - SP",
    "slug": "acelar-sp",
    "image": "/ACELAR-SP.jpg",
    "section": "Tablet",
    "classification": "Pain Relief & Anti-inflammatory",
    "formulation": "Tablets",
    "packing": "10 x 10 Tablets",
    "mrp": "₹110.00",
    "description": "ACELAR - SP is a combination tablet containing Aceclofenac, Paracetamol, and Serratiopeptidase, used to relieve pain, inflammation, and swelling.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Aceclofenac IP 100 mg, Paracetamol IP 325 mg, Serratiopeptidase IP 15 mg (eq. to Enzymatic units 30000) (as Enteric coated granules), Excipients q.s., Colour: Sunset Yellow FCF."
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
    "name": "ACELAR-MR",
    "slug": "acelar-mr",
    "image": "/ACELAR-MR.jpg",
    "section": "Tablet",
    "classification": "Pain Relief & Muscle Relaxant",
    "formulation": "Tablets",
    "packing": "10x10 Tablets",
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
    "formulation": "Film Coated Tablets",
    "packing": "10 x 10 Tablet",
    "mrp": "₹165.00",
    "description": "OCUCEF - 200 LB is a combination tablet with Cefixime (an antibiotic) and Lactic Acid Bacillus (a probiotic) to treat bacterial infections while supporting gut health.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Cefixime I.P. Eq. to Anhydrous Cefixime 200 mg, Lactic Acid Bacillus 60 Million Spores, Excipients q.s. Colour: Titanium Dioxide I.P."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. protect from direct sunlight. Keep all medicines out of reach of children."
      },
      {
        "heading": "Manufactured By",
        "content": "Sapphire Life Sciences"
      }
    ]
  },
  {
    "name": "OC-CEF-200 LB",
    "slug": "oc-cef-200-lb",
    "image": "/OC-CEF-200 LB.jpg",
    "section": "Tablet",
    "classification": "Antibiotic with Probiotic",
    "formulation": "Dispersible Tablets",
    "packing": "10x10 Tablets",
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
    "name": "OCUCEF-100",
    "slug": "ocucef-100",
    "image": "/OCUCEF-100.jpg",
    "section": "Tablet",
    "classification": "Antibiotic",
    "formulation": "Dispersible Tablets IP",
    "packing": "10 x 10 Tablets",
    "mrp": "₹92.00",
    "description": "OCUCEF-100 contains Cefixime as dispersible tablets, an antibiotic used to treat a wide variety of bacterial infections.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each uncoated dispersible tablet contains: Cefixime (as Trihydrate) IP eq. to Anhydrous Cefixime 100 mg, Excipients q.s. Colour: Sunset Yellow. Flavour: Bubble Gum Flavour."
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
  },
  {
    "name": "Ocucef-O",
    "slug": "ocucef-o",
    "image": "/OCUCEF-O.jpg",
    "section": "Tablet",
    "classification": "Antibiotic",
    "formulation": "Tablets",
    "packing": "10x10 Tablets",
    "mrp": "₹220.00",
    "description": "Ocucef-O is a combination tablet containing Cefixime and Ofloxacin, used to treat a wide variety of bacterial infections.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Cefixime Trihydrate IP eq. to Anhydrous Cefixime 200 mg, Ofloxacin IP 200 mg, Excipients q.s. Colour: Titanium Dioxide IP."
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
    "name": "O-CORT 6",
    "slug": "o-cort-6",
    "image": "/O-CORT 6.jpg",
    "section": "Tablet",
    "classification": "Corticosteroid",
    "formulation": "Tablets",
    "packing": "10 x 10 Tablets",
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
    "name": "Ociclav-625 LB",
    "slug": "ociclav-625-lb",
    "image": "/OCICLAV-625.jpg",
    "section": "Tablet",
    "classification": "Antibiotic with Probiotic",
    "formulation": "Tablets",
    "packing": "10 x 1 x 6 Tablets",
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
    "name": "O DIC-SP",
    "slug": "o-dic-sp",
    "image": "/O DIC-SP.jpg",
    "section": "Tablet",
    "classification": "Pain Relief & Anti-inflammatory",
    "formulation": "Tablets",
    "packing": "10 x 10 Tablets",
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
    "formulation": "Tablets",
    "packing": "10 x 10 Tablets",
    "mrp": "₹110.00",
    "description": "O-DOT-M is a combination tablet with Drotaverine HCl and Mefenamic Acid, primarily used to relieve spasmodic pain.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Drotaverine HCl IP 80 mg, Mefenamic Acid IP 250 mg, Excipients q.s. Colour: Erythrosine & Titanium Dioxide IP."
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
    "name": "Ocilar-OZ",
    "slug": "ocilar-oz-tablet",
    "image": "/OCLIAR-OZ.jpg",
    "section": "Tablet",
    "classification": "Antibiotic & Antiamoebic",
    "formulation": "Tablets IP",
    "packing": "10 x 10 Tablets",
    "mrp": "₹89.00",
    "description": "Ocilar-OZ is a combination tablet containing Ofloxacin and Ornidazole, used to treat bacterial and parasitic infections.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Ofloxacin I.P. 200 mg, Ornidazole I.P. 500 mg, Excipients q.s., Colour: Sunset Yellow."
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
    "name": "Ocicox-90",
    "slug": "ocicox-90",
    "image": "/OCICOX-90.jpg",
    "section": "Tablet",
    "classification": "Pain Relief (NSAID)",
    "formulation": "Tablets IP",
    "packing": "10 x 10 Tablets",
    "mrp": "₹100.00",
    "description": "Ocicox-90 contains Etoricoxib, a non-steroidal anti-inflammatory drug (NSAID) used to relieve pain and inflammation.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Etoricoxib IP 90 mg, Excipients q.s. COLOUR: Titanium Dioxide IP."
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
    "name": "OCUCET-5",
    "slug": "ocucet-5",
    "image": "/OCUCET-5.jpg",
    "section": "Tablet",
    "classification": "Anti-allergic",
    "formulation": "Tablets IP",
    "packing": "10 Alu Strips of 10 Tablets",
    "mrp": "₹40.00",
    "description": "Levocetirizine Dihydrochloride Tablets IP.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Levocetirizine Dihydrochloride IP 5 mg, Excipients q.s., Colour: Titanium Dioxide IP."
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
    "name": "OZT-250",
    "slug": "ozt-250",
    "image": "/OZT-250.jpg",
    "section": "Tablet",
    "classification": "Antibiotic",
    "formulation": "Tablets IP",
    "packing": "10 x 6 Tablets",
    "mrp": "₹65.00",
    "description": "Azithromycin Tablets IP 250 mg.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Azithromycin Dihydrate IP equivalent to Azithromycin (Anhydrous) 250 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from moisture at a temperature not exceeding 30 C."
      },
      {
        "heading": "Marketed By",
        "content": "Ocular Pharmaceuticals"
      }
    ]
  },
  {
    "name": "RD-Count",
    "slug": "rd-count",
    "image": "/RD-COUNT.jpg",
    "section": "Tablet",
    "classification": "Ayurvedic Platelet Booster",
    "formulation": "Tablet",
    "packing": "10 x 10 Tablets",
    "mrp": "₹135.00",
    "description": "Carica Papaya Leaf Ext, Tinospora, Goat Milk, Wheat Germ Oil & Swerita Chirata Tablet.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Carica Papaya Leaf Ext. 1100 mg, Tinospora Cardifolia Ext. 150 mg, Goat Milk Powder 100 mg, Wheat Germ Oil 40 mg, Swerita Chirata 10 mg."
      },
      {
        "heading": "Dosage",
        "content": "1 tablet once a day or as directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Keep out of reach of children."
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
    "formulation": "Tablets IP",
    "packing": "10x10 Tablets Alu-Alu",
    "mrp": "₹60.00",
    "description": "Ofloxacin Tablets IP 200 mg.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Ofloxacin IP 200 mg, Excipients q.s. Colour: Titanium Dioxide."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from light & moisture at a temperature not exceeding 30 C."
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
    "formulation": "Tablets IP",
    "packing": "10 x 10 Tablets",
    "mrp": "₹40.00",
    "description": "Flunarizine Dihydrochloride Tablets IP 10 mg.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Flunarizine Dihydrochloride B.P. equivalent to Flunarizine 10 mg, Excipients q.s. Colour: Erythrosine."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store at a temperature not exceeding 25°C. Protect from direct light & moisture."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Oculiv-300",
    "slug": "oculiv-300",
    "image": "/OCULIV-300.jpg",
    "section": "Tablet",
    "classification": "Hepatoprotective",
    "formulation": "Film coated Tablet IP",
    "packing": "10x10 Tablets",
    "mrp": "₹375.00",
    "description": "Oculiv-300 contains Ursodeoxycholic Acid, used for treating gallstones and primary biliary cirrhosis.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Ursodeoxycholic Acid IP 300 mg, Excipients q.s. COLOURS: Sunset Yellow FCF & Titanium Dioxide IP."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store at a temperature not exceeding 30°C. Protect from light & moisture. Keep out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "Ocupod-200",
    "slug": "ocupod-200",
    "image": "/OCUPOD-200.jpg",
    "section": "Tablet",
    "classification": "Antibiotic",
    "formulation": "Tablets I.P.",
    "packing": "10 x 10 TABLETS",
    "mrp": "₹220.00",
    "description": "Ocupod-200 contains Cefpodoxime Proxetil, an antibiotic used to treat various bacterial infections.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Cefpodoxime Proxetil I.P. Eq. to Cefpodoxime 200 mg, Excipients q.s. Colour: Titanium Dioxide IP."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from moisture, at a temperature not exceeding 30°C. Keep the medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "O-VOM MD",
    "slug": "o-vom-md",
    "image": "/O-VOM MD.jpg",
    "section": "Tablet",
    "classification": "Antiemetic",
    "formulation": "Orally Disintegrating Tablets IP",
    "packing": "10 x 10 Tablets",
    "mrp": "",
    "description": "O-VOM MD contains Ondansetron as orally disintegrating tablets, used to prevent nausea and vomiting.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each Orally Disintegrating tablet contains: Ondansetron IP 4 mg, Excipients q.s. Colour: Sunset Yellow FCF."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store at a temperature not exceeding 30°C. Protect from light & moisture. Keep all medicines out of reach of children."
      },
      {
        "heading": "Manufactured By",
        "content": "Animal Healthcare"
      }
    ]
  },
  {
    "name": "Ocured-4",
    "slug": "ocured-4",
    "image": "/OCURED-4.jpg",
    "section": "Tablet",
    "classification": "Corticosteroid",
    "formulation": "Tablets IP",
    "packing": "10 x 10 Tablets",
    "mrp": "₹60.00",
    "description": "Ocured-4 contains Methylprednisolone (4 mg), a corticosteroid used to treat inflammation, severe allergies, and chronic conditions.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each uncoated tablet contains: Methylprednisolone IP 4 mg, Excipients q.s."
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
    "name": "Ocured-8",
    "slug": "ocured-8",
    "image": "/OCURED-8.jpg",
    "section": "Tablet",
    "classification": "Corticosteroid",
    "formulation": "Tablets IP",
    "packing": "10x10 Tablets",
    "mrp": "₹80.00",
    "description": "Ocured-8 contains Methylprednisolone (8 mg), a corticosteroid used to treat inflammation and allergic conditions.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each uncoated tablet contains: Methylprednisolone IP 8 mg, Excipients q.s."
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
    "name": "Ocu-NP",
    "slug": "ocu-np",
    "image": "/OCU-NP.jpg",
    "section": "Tablet",
    "classification": "Pain Relief (NSAID)",
    "formulation": "Tablets",
    "packing": "10 Blister Strips of 10 Tablets",
    "mrp": "₹45.00",
    "description": "Ocu-NP is a combination tablet containing Nimesulide and Paracetamol, used for pain relief and fever.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each uncoated tablet contains: Nimesulide BP 100 mg, Paracetamol IP 325 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dark & dry place. Keep out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "ON-CLAV 625 LB",
    "slug": "on-clav-625-lb",
    "image": "/ON-CLAV 625.jpg",
    "section": "Tablet",
    "classification": "Antibiotic with Probiotic",
    "formulation": "Tablets",
    "packing": "10 x 6 Tablets",
    "mrp": "₹165.50",
    "description": "ON-CLAV 625 LB is a combination of Amoxycillin, Potassium Clavulanate, and Lactic Acid Bacillus tablets.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Amoxycillin Trihydrate I.P. eq. to Amoxycillin 500 mg, Potassium Clavulanate Diluted I.P. eq. to Clavulanic Acid 125 mg, Lactic Acid Bacillus 60 millions spores. Excipients q.s. Colour: Titanium Dioxide I.P."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the physician."
      },
      {
        "heading": "Storage",
        "content": "Must be stored below 25°C in a dry & dark place. Do not refrigerate."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "ON-MD",
    "slug": "on-md",
    "image": "/ON-MD.jpg",
    "section": "Tablet",
    "classification": "Pain Relief (NSAID)",
    "formulation": "Mouth Dissolving Tablets",
    "packing": "10 x 10 Tablets",
    "mrp": "₹30.00",
    "description": "ON-MD contains Nimesulide as Mouth Dissolving Tablets for pain relief.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each mouth dissolving tablet contains: Nimesulide B.P. 100 mg, Excipients q.s. Colour: Sunset Yellow FCF."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool & dry place. Protect from direct light."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "OCUZOLE-150",
    "slug": "ocuzole-150",
    "image": "/OCUZOLE-150.jpg",
    "section": "Tablet",
    "classification": "Antifungal",
    "formulation": "Tablets IP",
    "packing": "20 x 1 x 1 Tablets",
    "mrp": "",
    "description": "OCUZOLE-150 contains Fluconazole (150 mg), an antifungal medication.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each tablet contains: Fluconazole IP 150 mg."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry place."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR"
      }
    ]
  },
  {
    "name": "Ocupod-CV",
    "slug": "ocupod-cv-tablet",
    "image": "/OCUPOD-CV.jpg",
    "section": "Tablet",
    "classification": "Antibiotic",
    "formulation": "Tablets",
    "packing": "10 x 10 Tablets",
    "mrp": "₹280.00",
    "description": "Ocupod-CV is a combination of Cefpodoxime Proxetil & Potassium Clavulanate Tablets.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Cefpodoxime Proxetil I.P. Eq. to Cefpodoxime 200 mg, Potassium Clavulanate Diluted I.P. Eq. to Clavulanic Acid 125 mg, Excipients q.s. Colour: Titanium Dioxide I.P."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
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
    "name": "RD-DOX-LB",
    "slug": "rd-dox-lb",
    "image": "/RD-DOX LB.jpg",
    "section": "Tablet",
    "classification": "Antibiotic with Probiotic",
    "formulation": "Tablets",
    "packing": "10x10 Tablets",
    "mrp": "₹120.00",
    "description": "RD-DOX-LB is a combination of Doxycycline Hydrochloride & Lactic acid Bacillus Tablets.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each film coated tablet contains: Doxycycline Hydrochloride IP 100 mg, Lactic Acid Bacillus 5 Billion Spores. Colour: Tartrazine Lake & Titanium Dioxide."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store protected from light at a temperature not exceeding 30°C. Keep the Medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "RD NP",
    "slug": "rd-np",
    "image": "/RD-NP.jpg",
    "section": "Tablet",
    "classification": "Pain Relief (NSAID)",
    "formulation": "Tablets",
    "packing": "10x10 Tablets",
    "mrp": "₹30.00",
    "description": "RD NP is a combination of Nimesulide & Paracetamol Tablets used for pain relief and fever.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each uncoated tablet contains: Nimesulide BP 100 mg, Paracetamol IP 325 mg. Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place. Keep medicine out of reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  {
    "name": "RD ZOLE-20",
    "slug": "rd-zole-20",
    "image": "/RD-ZOLE.jpg",
    "section": "Capsule",
    "classification": "Gastrointestinal",
    "formulation": "Gastro-Resistant Capsules IP",
    "packing": "10 x 15 Capsules",
    "mrp": "",
    "description": "RD ZOLE-20 contains Omeprazole Gastro-Resistant Capsules IP, used to treat acid reflux and ulcers.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each hard gelatin capsule contains: Omeprazole IP 20 mg (as enteric coated pellets). Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician. Capsule should be swallowed as whole and not to be opened, chewed or crushed."
      },
      {
        "heading": "Storage",
        "content": "Store in a cool, dry & dark place."
      },
      {
        "heading": "Marketed By",
        "content": "Ocular Pharmaceuticals"
      }
    ]
  },
  {
    "name": "S-DICLO",
    "slug": "s-diclo",
    "image": "/S-DICLO.jpg",
    "section": "Tablet",
    "classification": "Pain Relief & Anti-inflammatory",
    "formulation": "Enteric Coated Tablets",
    "packing": "10x10 Tablets",
    "mrp": "₹70.00",
    "description": "S-DICLO is a combination tablet containing Serratiopeptidase and Diclofenac Potassium, used for pain relief and inflammation.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each enteric coated tablet contains: Serratiopeptidase IP 10 mg (eq. to 20,000 Serratiopeptidase units) (as enteric coated granules), Diclofenac Potassium BP 50 mg, Excipients q.s. Colour: Sunset Yellow FCF."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician. Caution: Tablet should be swallowed as whole (not to be broken, chewed or crushed)."
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
    "name": "RD-SPAS",
    "slug": "rd-spas",
    "image": "/RD-SPAS.jpg",
    "section": "Tablet",
    "classification": "Antispasmodic & Pain Relief",
    "formulation": "Tablets IP",
    "packing": "10 x 10 Tablets",
    "mrp": "₹35.00",
    "description": "RD-SPAS is a combination of Mefenamic Acid & Dicyclomine Hydrochloride Tablets, used to relieve spasmodic pain.",
    "details": [
      {
        "heading": "Composition",
        "content": "Each uncoated tablet contains: Mefenamic Acid IP 250 mg, Dicyclomine Hydrochloride IP 10 mg, Excipients q.s."
      },
      {
        "heading": "Dosage",
        "content": "As directed by the Physician."
      },
      {
        "heading":"Storage",
        "content": "Store in a cool, dry & dark place. Keep medicine out of the reach of children."
      },
      {
        "heading": "Marketed By",
        "content": "OCULAR PHARMACEUTICALS"
      }
    ]
  },
  
  
];

await Product.deleteMany({});
await Product.insertMany(sample);
console.log("✅ Seeded products:", sample.length);
process.exit();
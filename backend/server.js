// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import contactRoute from "./routes/contactRoute.js";
dotenv.config();
await connectDB();

const app = express();
app.use(cors({
  origin: ["http://localhost:3000", "https://occular-eqdo.vercel.app/"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoute);

app.get("/", (req, res) => res.send("Backend up"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on", PORT));

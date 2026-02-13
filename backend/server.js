// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
await connectDB();

const app = express();
app.use(cors({
  origin: [
    "https://occular-d25y.vercel.app", // deployed frontend
    "http://localhost:3000"           // local frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => res.send("Backend up"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
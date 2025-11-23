import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const quotesPath = path.join(__dirname, "quotes.json");
const quotes = JSON.parse(fs.readFileSync(quotesPath, "utf-8"));

app.use("/", express.static("./public"));

app.get("/api", (req, res) => {
  res.status(200).json(quotes);
});

app.get("/api/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.status(200).json(quotes[randomIndex]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
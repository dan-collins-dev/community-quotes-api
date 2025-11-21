import express from "express";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

const quotes = JSON.parse(fs.readFileSync("./quotes.json", "utf-8"));

app.get("/", (req, res) => {
  res.status(200).json(quotes);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
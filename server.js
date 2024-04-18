import "dotenv/config"
import express from "express";
import app from "./src/app.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 80;

app.use(express.static(__dirname + "/public_html/www"));
app.listen(port, () => {
    console.log(`server online and listen at http://localhost:${port}`);
});
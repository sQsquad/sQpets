import express from "express";
import app from "./src/app.js";

const port = 3000;

app.listen(port, () => {
    console.log(`server online and listen at http://localhost:${port}`);
});
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("<title>sQpets</title><h1>sQpets</h1><p>Coming soon...</p>");
})

export default app;
const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send({ data: "Hello, friend." });
});

const PORT = parseInt(process.env.PORT, 10) || 3000;
app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});

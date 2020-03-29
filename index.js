const dotenv = require("dotenv");
const express = require("express");

dotenv.config();
const app = express();

require("./services/auth");

app.use("/auth", require("./routes/auth"));

const PORT = parseInt(process.env.PORT, 10) || 3000;
app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});

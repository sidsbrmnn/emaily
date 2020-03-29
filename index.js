const express = require("express");

require("./services/error");
require("./services/config");

const app = express();

require("./services/db");
require("./services/auth");
require("./services/routes")(app);

const PORT = parseInt(process.env.PORT, 10) || 3000;
app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});

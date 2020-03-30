const express = require("express");
const mongoose = require("mongoose");

require("./services/error");
require("./services/config");

const app = express();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/emaily";
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });

require("./services/auth");
require("./services/routes")(app);

const PORT = parseInt(process.env.PORT, 10) || 3000;
const server = app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});

process.on("SIGTERM", () => {
  server.close((err) => {
    if (err) {
      throw err;
    }

    console.log("Server closed");
    mongoose.connection.close((err) => {
      if (err) {
        throw err;
      }

      console.log("Disconnected from MongoDB");
      process.exit(0);
    });
  });
});

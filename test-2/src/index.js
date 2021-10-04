const express = require("express");
const cors = require("cors");
const attachRoutes = require("./routes");

const initialize = async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  attachRoutes(app);

  app.listen(3000, () => {
    console.log("app started");
  });
};

initialize();

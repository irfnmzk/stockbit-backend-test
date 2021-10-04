require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { database } = require("./config/database");
const attachRoutes = require("./routes");
const loggingMiddleware = require("./middlewares/logging");

const initializeApp = async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(loggingMiddleware);

  attachRoutes(app);

  app.listen(process.env.PORT || 3000, () => {
    console.log("app started");
  });
};

const initializeDatabase = async () => {
  try {
    await database.authenticate();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
};

const initialize = async () => {
  await initializeDatabase();
  initializeApp();
};

initialize();

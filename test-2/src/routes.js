const { searchMovie } = require("./controllers/search");

const attachRoutes = (app) => {
  app.get("/search", searchMovie);
};

module.exports = attachRoutes;

const { movieDetail } = require("./controllers/movie");
const { searchMovie } = require("./controllers/search");

const attachRoutes = (app) => {
  app.get("/search", searchMovie);
  app.get("/movie/:id", movieDetail);
};

module.exports = attachRoutes;

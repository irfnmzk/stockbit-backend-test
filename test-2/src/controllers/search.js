const { apiSearchMovie } = require("../services/omdb");

const searchMovie = async (req, res) => {
  const params = req.query;

  const movies = await apiSearchMovie(params);

  return res.send({ hello: "world" });
};

module.exports = {
  searchMovie,
};

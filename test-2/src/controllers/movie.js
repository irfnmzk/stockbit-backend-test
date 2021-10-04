const { apiMovieDetail } = require("../services/omdb");

const movieDetail = async (req, res) => {
  const { id } = req.params;

  const movies = await apiMovieDetail(id);

  if (!movies) {
    return res.status(404).send({
      message: "NOT FOUND",
    });
  }

  return res.send(movies);
};

module.exports = {
  movieDetail,
};

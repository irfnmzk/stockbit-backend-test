const { apiMovieDetail } = require("../services/omdb");

const movieDetail = async (req, res) => {
  const { id } = req.params;

  console.log(id);

  //   const movies = await apiMovieDetail(params);

  return res.send({ hello: "world" });
};

module.exports = {
  movieDetail,
};

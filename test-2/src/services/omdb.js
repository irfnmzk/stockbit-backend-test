const fetch = require("node-fetch");
const qs = require("querystring");

const OMDB_BASE_URL = "http://www.omdbapi.com/";
const API_KEY = "faf7e5bb";

const apiSearchMovie = async (params) => {
  const queryParams = {
    apiKey: API_KEY,
    ...params,
  };
  const query = qs.stringify(queryParams);
  const response = await fetch(OMDB_BASE_URL + "?" + query).then((data) =>
    data.json()
  );

  console.log(response);

  return response;
};

const apiMovieDetail = async (id) => {
  const queryParams = {
    apiKey: API_KEY,
    i: id,
  };
  const query = qs.stringify(queryParams);
  const response = await fetch(OMDB_BASE_URL + "?" + query).then((data) =>
    data.json()
  );

  return response;
};

module.exports = {
  apiSearchMovie,
  apiMovieDetail,
};

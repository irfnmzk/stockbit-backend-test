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

  try {
    const URL = `${OMDB_BASE_URL}?${query}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const apiMovieDetail = async (id) => {
  const queryParams = {
    apiKey: API_KEY,
    i: id,
  };
  const query = qs.stringify(queryParams);

  try {
    const URL = `${OMDB_BASE_URL}?${query}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = {
  apiSearchMovie,
  apiMovieDetail,
};

const fetch = require("node-fetch");
const qs = require("querystring");

const OMDB_BASE_URL = "http://www.omdbapi.com";
const API_KEY = "faf7e5bb";

const apiSearchMovie = async (params) => {
  params.apiKey = API_KEY;
  const queryParams = qs.stringify(params);
  const response = await fetch(OMDB_BASE_URL + queryParams).then((data) =>
    data.json()
  );

  console.log(response);

  return response;
};

module.exports = {
  apiSearchMovie,
};

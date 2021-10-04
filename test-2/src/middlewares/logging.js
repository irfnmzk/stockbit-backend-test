const LogModel = require("../model/log");

const loggingMiddleware = async (req, res, next) => {
  await LogModel.create({
    endpoint: req.url,
    query_param: JSON.stringify(req.query),
  });

  next();
};

module.exports = loggingMiddleware;

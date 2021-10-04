const { DataTypes } = require("sequelize");
const { database } = require("../config/database");

const LogModel = database.define("logs", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  endpoint: {
    type: DataTypes.STRING,
  },
  query_param: {
    allowNull: true,
    type: DataTypes.STRING,
  },
});

LogModel.sync();

module.exports = LogModel;

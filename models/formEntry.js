const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const FormEntry = sequelize.define("FormEntry", {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = FormEntry;

const sequelize = require("../config/db");
const FormEntry = require("./formEntry");

const initModels = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ DB connected");
    await sequelize.sync(); // use { force: true } if you want to reset table
    console.log("✅ Tables synced");
  } catch (err) {
    console.error("❌ DB Error:", err);
  }
};

module.exports = {
  initModels,
  FormEntry,
};

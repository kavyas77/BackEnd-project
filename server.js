const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 5000;

// Import DB initializer and routes
const { initModels } = require("./models");
const formRoutes = require("./routes/formRoutes");

// Middleware
app.use(cors()); // Allow CORS
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/api", formRoutes);

// Start server and connect DB
initModels().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});

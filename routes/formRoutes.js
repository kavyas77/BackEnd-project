const express = require("express");
const router = express.Router();
const { submitForm, getFormEntries } = require("../controllers/formController");

// POST /api/form → to submit form data
router.post("/form", submitForm);

// GET /api/form → to retrieve all entries
router.get("/form", getFormEntries);

module.exports = router;

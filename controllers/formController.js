const { FormEntry } = require("../models");

// POST: Save form data
const submitForm = async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    // Validate inputs
    if (!fullName || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const entry = await FormEntry.create({ fullName, email, message });
    res.status(201).json(entry);
  } catch (err) {
    console.error("❌ Error in submitForm:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET: Fetch all form entries
const getFormEntries = async (req, res) => {
  try {
    const entries = await FormEntry.findAll();
    res.json(entries);
  } catch (err) {
    console.error("❌ Error in getFormEntries:", err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { submitForm, getFormEntries };

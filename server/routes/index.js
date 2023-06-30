const express = require('express');
const router = express.Router();
const Resume = require('../models/index');

// POST request to create a new resume
router.post('/store', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      linkedin,
      github,
      skills,
      experience,
      projects,
      education,
      extra,
    } = req.body;

    const resume = new Resume({
      name,
      email,
      phone,
      linkedin,
      github,
      skills,
      experience,
      projects,
      education,
      extra,
    });

    const savedResume = await resume.save();

    res.status(201).json(savedResume);
    console.log("DB Submitted")
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while saving the resume.' });
    console.log(error);
  }
});

module.exports = router;

const { application } = require("express");
const express = require("express");
const router = express.Router();
const pdf = require("html-pdf");
const pdfSample = require("../pdf-sample/index.js");
const resume = require("../models/index");
router.get("/msg", (req, res) => {
  res.send("hello world");
});
router.post("/create-pdf", async (req, res) => {
  try {
    await pdf.create(pdfSample(req.body, {})).toFile("Resume.pdf", (err) => {
      if (err) {
        res.send(err);
        console.log(err);
      }
      res.send(Promise.resolve());
      console.log("success");
    });
  } catch (err) {
    console.log("Error:", err);
  }
});
router.post("/resumes", async (req, res) => {
    try {
      // Extract the data from the request body
      const {
        name,
        email,
        phone,
        linkedin,
        github,
        skills,
        experience,
        education,
        project,
        languages,
        hobbies,
      } = req.body;
  
      // Create a new instance of the Resume model
      const newResume = new resume({
        name,
        email,
        phone,
        linkedin,
        github,
        skills,
        experience,
        education,
        project,
        languages,
        hobbies,
      });
  
      // Save the new resume to the database
      const savedResume = await newResume.save();
  
      res.status(201).json(savedResume);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to create a new resume" });
    }
  });
router.get("/fetch-pdf", (req, res) => {
  try {
    res.sendFile(`${__dirname}/Resume.pdf`);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});
router.use(express.static('../client/build'))
module.exports = router;

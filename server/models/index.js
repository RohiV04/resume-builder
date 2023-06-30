// Import required dependencies
const mongoose = require('mongoose');

// Create a Mongoose schema
const ResumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  linkedin: { type: String },
  github: { type: String },
  skills: { type: [String] },
  experience: [
    {
      organization: { type: String },
      position: { type: String },
      description: { type: String },
      duration: { type: String },
    },
  ],
  projects: [
    {
      title: { type: String },
      link: { type: String },
      description: { type: String },
    },
  ],
  education: [
    {
      school: { type: String },
      year: { type: String },
      qualification: { type: String },
      description: { type: String },
    },
  ],
  extra: [
    { type: String },
  ],
});

const Resume = mongoose.model("Resume", ResumeSchema);
module.exports = Resume;

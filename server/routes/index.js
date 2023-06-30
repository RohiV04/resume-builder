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
      exp1_org,
      exp1_pos,
      exp1_desc,
      exp1_dur,
      exp2_org,
      exp2_pos,
      exp2_desc,
      exp2_dur,
      proj1_title,
      proj1_link,
      proj1_desc,
      proj2_title,
      proj2_link,
      proj2_desc,
      edu1_school,
      edu1_year,
      edu1_qualification,
      edu1_score,
      edu2_school,
      edu2_year,
      edu2_qualification,
      edu2_score,
      extra_1,
      extra_2,
    } = req.body;

    const resume = new Resume({
      name,
      email,
      phone,
      linkedin,
      github,
      skills,
      exp1_org,
      exp1_pos,
      exp1_desc,
      exp1_dur,
      exp2_org,
      exp2_pos,
      exp2_desc,
      exp2_dur,
      proj1_title,
      proj1_link,
      proj1_desc,
      proj2_title,
      proj2_link,
      proj2_desc,
      edu1_school,
      edu1_year,
      edu1_qualification,
      edu1_score,
      edu2_school,
      edu2_year,
      edu2_qualification,
      edu2_score,
      extra_1,
      extra_2,
    });

    const savedResume = await resume.save();

    res.status(201).json(savedResume);
    console.log("DB Submitted");
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while saving the resume.' });
    console.log(error);
  }
});
router.get('/details',async(req,res)=>{
    try{
        let details=await Resume.find();
        res.json(details);
}catch(err){
    console.log(err);
}
}
)
module.exports = router;

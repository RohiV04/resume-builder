// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const ResumeSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: Number,
//     required: true,
//   },
//   linkedin: {
//     type: String,
//     required:true
//   },
//   github: {
//     type: String,
//     required:true
//   },
//   skills: {
//     type: String,
//     required: true,
//   },
//   experience: [
//     {
//       exp1_org: {
//         type: String,
//         // required:true
//       },
//       exp1_pos: {
//         type: String,
//         // required:true
//       },
//       exp1_desc: {
//         type: String,
//         // required:true
//       },
//       exp1_dur: {
//         type: String,
//         // required:true
//       },
//     },
//     {
//       exp2_org: {
//         type: String,
//         // required:true
//       },
//       exp2_pos: {
//         type: String,
//         // required:true
//       },
//       exp2_desc: {
//         type: String,
//         // required:true
//       },
//       exp2_dur: {
//         type: String,
//         // required:true
//       },
//     },
//   ],
//   education: [
//     {
//       edu1_school: {
//         type: String,
//         // required:true
//       },
//       edu1_year: {
//         type: String,
//         // required:true
//       },
//       edu1_qualification: {
//         type: String,
//         // required:true
//       },
//       edu1_score: {
//         type: String,
//         // required:true
//       },
//     },
//     {
//       edu2_school: {
//         type: String,
//         // required:true
//       },
//       edu2_year: {
//         type: String,
//         // required:true
//       },
//       edu2_qualification: {
//         type: String,
//         // required:true
//       },
//       edu2_score: {
//         type: String,
//         // required:true
//       },
//     },
//   ],
//   project: [
//     {
//       proj1_title: {
//         type: String,
//         // required:true
//       },
//       proj1_link: {
//         type: String,
//         // required:true
//       },
//       proj1_desc: {
//         type: String,
//         // required:true
//       },
//     },
//     {
//       proj2_title: {
//         type: String,
//         // required:true
//       },
//       proj2_link: {
//         type: String,
//         // required:true
//       },
//       proj2_desc: {
//         type: String,
//         // required:true
//       },
//     },
//   ],
//   languages:{
//     type:String,
//     // required:true
//   },
//   hobbies:{
//     type:String,
//     // required:true
//   }
// });
// const Resume = mongoose.model("resume", ResumeSchema);
// module.exports = Resume;
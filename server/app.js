const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const uri =
  "mongodb+srv://Rohi:EgWbIbD27nNOQipJ@cluster0.eqsiiyv.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);
const con = mongoose.connection;
con.once("open", () => {
  console.log("Mongo DB connected");
});
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRouter = require("./routes/auth");

const ResumeRoutes = require("./routes/index");

// app.get("/fetch-pdf", (req, res) => {
//   res.sendFile(`${__dirname}/Resume.pdf`);
// });
app.use("/", ResumeRoutes);
app.use("/", authRouter);
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use(express.static("../client/build"));

app.listen(port, () => {
  console.log(`server is running on port:${port}`);
});

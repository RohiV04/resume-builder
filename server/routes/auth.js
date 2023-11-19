const express = require("express");
const bcrypt = require("bcryptjs");
const app = express.Router();
const User = require("../models/auth");
const sendMail = require("../utils/mail");

app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) return res.status(400).send("User already exists");

    const newUser = new User({ email, password });
    await newUser.save();

    const token = await newUser.generateAuthToken();

    await sendMail(
      newUser.email,
      "Welcome to our platform",
      "Thank you for signing up!"
    );

    res.send({ token });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("User not found");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send("Invalid password");

    const token = await user.generateAuthToken();

    await sendMail(
      user.email,
      "Successful login",
      "You have successfully logged in to our platform."
    );

    res.send({ token });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;

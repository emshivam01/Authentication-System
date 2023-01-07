const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./model/user.js");

app.get("/", (req, res) => {
  res.sendStatus(200).send("Welcome to Authentication System");
});

app.post("/register", async (req, res) => {
  try {
    // collecting all the information

    const { firstname, lastname, email, password } = req.body;

    // Checking/Validating the collected information

    if (!(firstname && lastname && email && password)) {
      res.sendStatus(400).send("All fields are required");
    }

    // Checking if user already exist or not

    const existingUser = await User.findOne(email);

    if (!existingUser) {
      res.sendStatus(400).send("User Already Exist");
    }

    // Encyrpting the password

    const encryptPass = bcrypt.hash(password, 10);

    // creating user
    const user = new User.create({
      firstname,
      lastname,
      email,
      password: encryptPass,
    });

    user.password = undefined;

    // Creating token

    const token = jwt.sign({ id: user._id }, "El", { expiresIn: "1h" });

    user.token = token;
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    // collecting info from frontend

    const { firstname, lastname, email, password } = req.body;

    // validating info

    if (!(firstname && lastname && email && password)) {
      res.sendStatus(400).send("<h3>Please fill all the requied fields");
    }

    // Checking is if user exist or not

    const existingUser = User.findOne(email);

    if (!existingUser) {
      res.sendStatus(400).send("User Doesn't Exist");
    }

    // Comparing the password

    const compared = bcrypt.compare(password, existingUser.password);

    if (!(existingUser && compared)) {
      // create token

      const token = jwt.sign({ id: existingUser._id }, "mike", {
        expiresIn: "1h",
      });

      // creating options from cookie

      const options = {
        expires: new Date(Date.now() + 5 * 3600000),
        httpOnly: true,
      };

      res.sendStatus(200).cookie("token", token, options).json({
        success: true,
        token,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

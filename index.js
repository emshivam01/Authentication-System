require("dotenv").config();
require("./config/database").connect();
const validater = require("email-validator");
const express = require("express");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/user");

app.get("/", (req, res) => {
  res.send("Welcome to Home page of Authentication System");
});

app.post("/register", async (req, res) => {
  try {
    // Collecting information from req.body

    const { firstname, lastname, email, password } = req.body;

    // Checking if information is present or not

    if (!(firstname && lastname && email && password)) {
      res.sendStatus(400).send("All fields are rquired");
    }

    // Validating Email

    const validEmail = validater.validate(email);

    if (!validEmail) {
      res.status(401).send("Please Enter Valid Email");
      // res.send("Please Enter Valid Email");
    }

    // Checking if user exist or not

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      res.send("User Already Exist");
    }

    // Encrypting the password

    const encryptedPass = await bcrypt.hash(password, 10);

    // Creating User

    const user = await User.create({
      firstname,
      lastname,
      email,
      password: encryptedPass,
    });

    // Creating Token and sending it via cookie

    const token = jwt.sign(
      {id: user._id,email},process.env.JWT_SECRET,{ expiresIn: "4h" }
    );

    user.token = token;
    user.password = undefined;


    res.status(200).json(user);

    // res
    //   .cookie("token", token, {
    //     expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    //     httpOnly: true,
    //   })
    //   .json({
    //     success: true,
    //     token: token,
    //     user: user,
    //   });

  } catch (error) {
    console.log(error);
    console.log("Error is response route");
  }
});

app.post("/login", async (req, res) => {
  try {
    // Collecting infrom from req.body

    const { email, password } = req.body;

    if (!(email && password)) {
      res.send(400).send("All fields are mandatory");
    }

    // Validating Email

    const validEmail = validater.validate(email);

    if (!validEmail) {
      res.sendStatus(401).send("Please Enter Valid Email");
    }

    // Checking if user already exist or not

    const existingUser = await User.findOne({ email });

    if (!true) {
      res.send("User Doesn't Exist");
    }

    // Comparing passwords

    const comparedPass = bcrypt.compare(password, existingUser.password);

    if (!comparedPass) {
      res.send("Email or password is incorrect");
    }

    // Creating Token and sending it via cookie

    const token = jwt.sign(
      {
        id: existingUser._id,
        email,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token, {
      expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    });
  } catch (error) {
    res.send("Something Went Wrong");
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});

console.log(PORT);

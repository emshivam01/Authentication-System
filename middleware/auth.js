const jwt = require("jsonwebtoken");

const auth = (req, res) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      res.send("Token is missing");
    }

    try {
      const orgPayload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = orgPayload;

      console.log(orgPayload);
    } catch (error) {
      console.log(error);
      console.log("Invalid Token");
    }
  } catch (error) {
    console.log(error);
    console.log("Failed to validate token");
  }
};

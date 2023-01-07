const mongoose = require("mongoose");

MONGO_URL = "";

exports.connect = () => {
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Connected to database successfully"))
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
};

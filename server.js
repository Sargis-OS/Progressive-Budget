const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://user:password1@ds063177.mlab.com:63177/heroku_q65m5v1q",
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

// routes here
// require("./routes/api")(app);
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

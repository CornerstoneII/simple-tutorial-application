// Creating Server
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Importing Routes
const authRoute = require("./routes/auth");

dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("DB Connected!")
);

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route middlewares
app.use("/", authRoute);

const PORT = 9000;

app.listen(PORT, () => console.log(`Server is Live at ${PORT}`));

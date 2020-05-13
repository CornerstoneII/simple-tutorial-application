// Creating Server
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("DB Connected!")
);

// Importing Routes
const authRoute = require("./routes/auth");

// Route middlewares
app.use("/", authRoute);

const PORT = 9000;

app.listen(PORT, () => console.log(`Server is Live at ${PORT}`));

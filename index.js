// Creating Server
const express = require("express");
const app = express();

// Importing Routes
const authRoute = require("./routes/auth");

// Route middlewares
app.use("/", authRoute);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is Live at ${PORT}`));

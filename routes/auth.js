// Creation of Routes
const router = require("express").Router();

// Importing Model Schema
const User = require("../model/User");
const Admin = require("../model/Admin");

router.post("/registertutor", async (req, res) => {
  const admin = new Admin({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedAdmin = await admin.save();
    res.send(savedAdmin);
  } catch (err) {
    res.status(400).send(err);
  }
  // res.send("Register Tutor");
});

router.post("/registerstudent", async (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }

  // res.send("Register Student");
});

module.exports = router;

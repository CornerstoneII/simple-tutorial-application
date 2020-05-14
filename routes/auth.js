// Creation of Routes
const router = require("express").Router();

// Importing Model Schema
const User = require("../model/User");
const Admin = require("../model/Admin");

// Importing Validation File
const { loginValidation, registerValidation } = require("../validation");

router.post("/registertutor", async (req, res) => {
  // Validate the data before creating a Tutor / Admin
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

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
  // Validate the data before creating a User / Student
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

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

// Creation of Routes
const router = require("express").Router();

// Importing Model Schema
const User = require("../model/User");
const Admin = require("../model/Admin");
// Importing Validation File
const { loginValidation, registerValidation } = require("../validation");
// Importing bcrypt
const bcrypt = require("bcryptjs");

/**
 *
 *
 *
 *  Registration Section
 *
 *
 *
 *
 */

// Admin / Tutor Registration Route
router.post("/registertutor", async (req, res) => {
  // Validate the data before creating a Tutor / Admin
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if Admin (email) already exist in DB
  const emailExist = await Admin.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  // Password hash
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Creating a Tutor / Admin
  const admin = new Admin({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedAdmin = await admin.save();
    res.send("Registration Successful!");
  } catch (err) {
    res.status(400).send(err);
  }
  // res.send("Register Tutor");
});

// Student / User Registration Route
router.post("/registerstudent", async (req, res) => {
  // Validate the data before creating a User / Student
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user(email) already exist in DB
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  // Password hash
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Creating a User / Student
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send("Registration Successful!");
  } catch (err) {
    res.status(400).send(err);
  }

  // res.send("Register Student");
});

/**
 *
 *
 *
 *  Login Section
 *
 *
 *
 */
// Admin / Tutor Login Route
router.post("/logintutor", async (req, res) => {
  // Validate the data before creating a Tutor / Admin
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if Admin(email) does not exist in DB
  const admin = await Admin.findOne({ email: req.body.email });
  if (!admin) return res.status(400).send("Email does not exist");

  // Password validation
  const validPass = await bcrypt.compare(req.body.password, admin.password);
  if (!validPass) return res.status(400).send("Invalid Password");

  res.send("Logged IN!");
});

// User / Student Login Route
router.post("/loginstudent", async (req, res) => {
  // Validate the data before creating a Tutor / Admin
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user(email) does not exist in DB
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email does not exist");

  // Password validation
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid Password");

  res.send("Logged IN!");
});
module.exports = router;

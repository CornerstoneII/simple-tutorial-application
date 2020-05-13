// Creation of Routes
const router = require("express").Router();

router.post("/registertutor", (req, res) => {
  res.send("Register Tutor");
});

router.post("/registerstudent", (req, res) => {
  res.send("Register Student");
});

module.exports = router;

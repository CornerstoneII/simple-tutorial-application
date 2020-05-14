const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    category: {
      type: "Primary",
      description: "random data you shouldn't access",
    },
  });
});

module.exports = router;

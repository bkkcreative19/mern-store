const { RegisterUser, login } = require("../controller/authController");
//   const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.route("/register").post(RegisterUser);
router.route("/login").post(login);

module.exports = router;

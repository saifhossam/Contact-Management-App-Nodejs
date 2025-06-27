const ex = require("express")
const router = ex.Router()
const { registerUser, loginUser, currentUserInfo } = require("../Controllers/userControllers")
const validateToken = require("../middleware/validateTokenHandler")


router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

router.route("/current").get(validateToken, currentUserInfo)

module.exports = router
const ex = require("express")
const router = ex.Router()
const { getContact, createContact, getContactById, updateContact, deleteContact } = require("../Controllers/contactControllers")
const validateToken = require("../middleware/validateTokenHandler")

router.route("/").get(getContact)

router.route("/").post(createContact)

router.route("/:id").get(getContactById)

router.route("/:id").put(updateContact)

router.route("/:id").delete(deleteContact)

router.use(validateToken)
// router.route("/").get(getContact).post(createContact)
// router.route("/:id").get(getContactById).put(updateContact).delete(deleteContact)

module.exports = router
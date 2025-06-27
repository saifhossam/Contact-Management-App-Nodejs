const mon = require("mongoose");

const userSchema = mon.Schema({
    username: {
        type: String,
        required: [true, "Plz add username"]
    },
    email: {
        type: String,
        required: [true, "Plz add user email"],
        unique: [true, "Already taken email"]
    },
    password: {
        type: String,
        required: [true, "Plz add password number"]
    },
}, { timestamps: true })

module.exports = mon.model("Users", userSchema)
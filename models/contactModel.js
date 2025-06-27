const mon = require("mongoose");

const contactSchema = mon.Schema({
    user_id: {
        type: mon.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

    name: {
        type: String,
        required: [true, "Plz add contact name"]
    },
    email: {
        type: String,
        required: [true, "Plz add contact email"]
    },
    phone: {
        type: Number,
        required: [true, "Plz add contact number"]
    },
}, { timestamps: true })

module.exports = mon.model("Contacts", contactSchema)
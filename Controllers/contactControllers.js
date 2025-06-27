const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")


const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id })
    res.json(contacts)
})

const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        throw new Error("All is mandatory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    })
    res.json(contact)
})

const getContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        throw new Error("not found")
    }
    res.json(contact)
})

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        throw new Error("not found")
    }

    if (contact.user.id.toSrting() !== req.user.id) {
        throw new Error("Cannot update other user contacts")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true })
    res.json(updatedContact)
})

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        throw new Error("not found")
    }

    if (contact.user.id.toSrting() !== req.user.id) {
        throw new Error("Cannot delete other user contacts")
    }

    await Contact.findByIdAndDelete(req.params.id)
    res.json(contact)
})

module.exports = { getContact, createContact, getContactById, updateContact, deleteContact }
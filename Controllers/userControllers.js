const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const crypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        throw new Error("All is mandatory")
    }

    const userAvailable = await User.findOne({ email })
    if (userAvailable) {
        throw new Error("Already registered")
    }

    const hashedPassword = await crypt.hash(password, 10)

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })
    res.json({ _id: user.id, email: user.email, password: user.password })
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new Error("All is mandatory")
    }

    const user = await User.findOne({ email })
    if (user && (await crypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN, { expiresIn: "10m" })
        res.json({ accessToken })
    }
})

const currentUserInfo = asyncHandler(async (req, res) => {
    res.json(req.user)
})

module.exports = { registerUser, loginUser, currentUserInfo }
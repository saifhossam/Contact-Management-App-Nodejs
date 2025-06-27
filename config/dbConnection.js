const mon = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mon.connect(process.env.CONNETION_STRING)
        console.log("DB connected")
    } catch {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDb
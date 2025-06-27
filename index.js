const ex = require("express");
const connectDb = require("./config/dbConnection");
const env = require("dotenv").config()
const errorHandler = require("./middleware/errorHandler");
const app = ex();

const port = process.env.PORT || 5000

app.use(errorHandler);

app.use(ex.json())


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


app.use("/api/contacts", require("./Routes/contactsRouters"))
app.use("/api/users", require("./Routes/usersRouters"))

connectDb()
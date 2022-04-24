const express = require("express")
const cors = require("cors")
const connectDB = require('./config/database')

const entriesRouter = require("./routes/entries")
const usersRouter = require("./routes/users")


require ("dotenv").config()

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

connectDB()

app.use("/entries", entriesRouter)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
const express = require("express")
const cors = require("cors")

const userRouter = require("./routes/users.js")
const { verifyAdmin } = require("./midlleware/verifyDashboard.js");


const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/",userRouter)

app.get("/admin", verifyAdmin);


app.listen("5000",()=>console.log("Server is runnig on port 5000"))
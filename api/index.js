const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan")
const userRoute = require("./routes/users")
const userAuth = require("./routes/auth")
const postRoute = require("./routes/posts")

dotenv.config()
mongoose.connect(
    process.env.MONGO_URL,{ 
        useNewUrlParser:true 
    },
    () => {
    console.log("Connected to database");
});

const port = 8080;

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",userRoute)
app.use("/api/auth",userAuth)
app.use("/api/post",postRoute)


app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

const postRoute = require("./routes/posts");
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err) => {
    if (err) {
        console.log("Some Unexpected Error Occured", err);
    } else{
        console.log("Connected to Mongodb Atlas");
    }
}
);

//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/users",userRoute);
app.use("/auth",authRoute);
app.use("/posts",postRoute);

app.listen(5000,()=>{
    console.log("Backend running at port 8000 yes"); 
})
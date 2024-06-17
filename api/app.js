import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import UserRoute from "./routes/user.route.js";
import dotenv from "dotenv";

const app = express();


dotenv.config();

app.use(cors({origin: process.env.CLIENT_URL, credentials: true}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/users", UserRoute);

app.listen(8008, ()=>{
    console.log("Server is running")
})
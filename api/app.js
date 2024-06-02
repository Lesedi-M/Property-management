import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import dotenv from "dotenv";

const app = express();


dotenv.config();

app.use(cors({origin: process.env.CLIENT_URL, credentials: true}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);

app.listen(8080, ()=>{
    console.log("Server is running")
})
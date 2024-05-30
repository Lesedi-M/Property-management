import express from "express"

const app = express();

app.use("/api/test", (req,res)=>{
    res.send("it wrks");
})

app.listen(8080, ()=>{
    console.log("Server is running")
})
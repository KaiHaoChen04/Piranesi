import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'


// app config
const app = express()
const port = 4000

//middleware
app.use(express.json()) //Used to handle requests from frontend
app.use(cors()) // Access the backend from any frontend

// db connection
connectDB()

app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log('server started on http://localhost:{port}');
})

// mongodb+srv://kaihao:KennyChen123@cluster0.nyojt9k.mongodb.net/?
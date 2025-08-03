import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import clothesRouter from './routes/clothesRoute.js'


// app config
const app = express()
const port = 4000

//middleware
app.use(express.json()) //Used to handle requests from frontend
app.use(cors()) // Access the backend from any frontend

// db connection
connectDB()

//API Endpoints using express.js
app.use("/api/clothes", clothesRouter);
app.use("/images", express.static('uploads')) //This endpoint allows image to be displayed in frontend


//Server handling request and responding
app.get("/", (req, res)=>{
    res.send("API Working")
})

//Server initialization
app.listen(port, ()=>{
    console.log('server started on http://localhost:{port}');
})

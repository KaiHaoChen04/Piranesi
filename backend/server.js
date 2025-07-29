import express from 'express'
import cors from 'cors'


// app config
const app = express()
const port = 4000

//middleware
app.use(express.json) //Used to handle requests from frontend
app.use(cors()) // Access the backend from any frontend



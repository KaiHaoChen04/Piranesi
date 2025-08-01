import express from "express"
import { addClothes } from "../controllers/clothesController"
import multer from "multer"

const clothesRouter = express.Router(); // GET, POST, etc... methods

//Image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb)=>{return cb(null,`${Date.now()}${file.originalname}`)} //This arrow function makes our filename unique because every TIME is different
})

const upload = multer({storage:storage}) //Store the image in the uplaods folder

clothesRouter.post('/add',upload.single("image"), addClothes) //Send data to the server and once the data gets processed we will get a response

export default clothesRouter;
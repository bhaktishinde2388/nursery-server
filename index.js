import express, { json } from "express";
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

import {getHealth} from "./controllers/health.js"
import { postPlant } from "./controllers/plant.js";
import { getPlants , getPlantId ,putPlantId ,deletePlantId} from "./controllers/plant.js";
import { pageNotFound } from "./controllers/error.js";



const app = express()
app.use(express.json())

const dbConnection = async ()=>{
    const conn = await mongoose.connect("mongodb+srv://bhaktishinde2388:2auLQGdFm4cPC2tM@cluster0.u9doj1t.mongodb.net/nursery-server")

    if(conn){
        console.log("mongodb connected")
    }
    else{
        console.log("mongodb not connected")
    }
}
dbConnection();

app.get("/health",getHealth)


app.post("/plant",postPlant)
// read resourse
app.get("/plants",getPlants)
//update specific field
app.get("/plant/:id",getPlantId)
// this put  method is used for update
app.put("/plant/:id" , putPlantId)
// detete endpoint call karnyasathi
app.delete("/plant/:id",deletePlantId)




app.use("*", pageNotFound)

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`servery is run on ${PORT}`)
    
})
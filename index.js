import express, { json } from "express";
import dotenv from "dotenv"
dotenv.config()

import {getHealth} from "./controllers/health.js"
import { postPlant } from "./controllers/plant.js";
import { getPlants , getPlantId ,putPlantId ,deletePlantId} from "./controllers/plant.js";


const app = express()
app.use(express.json())

//temp. db / resourse
const plants = [
    {
        "id": 1,
        "name": "bambu",
        "img": "https://m.media-amazon.com/images/I/61hC8AAD1AL._SL1000_.jpg",
        "price": 40,
        "category": "indoor",
        "description": "Ugaoo Lucky Bamboo 3 Layer Feng Shui Plant"
    },
    {
        "id": 3,
        "name": "rose",
        "img": "https://m.media-amazon.com/images/I/61hC8AAD1AL._SL1000_.jpg",
        "price": 40,
        "category": "indoor",
        "description": "Ugaoo Lucky Bamboo 3 Layer Feng Shui Plant"
    },
    {
        "id":7,
        "name": "mango",
        "img": "https://m.media-amazon.com/images/I/61hC8AAD1AL._SL1000_.jpg",
        "price": 40,
        "category": "indoor",
        "description": "Ugaoo Lucky Bamboo 3 Layer Feng Shui Plant"
    }
]


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




app.use("*", (req,res)=>{
    res.send(`<div>
        <h1 style="text-align: center;"404 not found</h1>
        </div>`)
})

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`servery is run on ${PORT}`)
    
})
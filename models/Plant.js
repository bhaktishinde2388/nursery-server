import { Schema, model } from "mongoose";

const plantSchema = new Schema({
    name:String,
    category:String,
    price:Number,
    image:String,
    description:String
})

const Plant = model("Plant",plantSchema)

export default Plant
import Plant from "../models/Plant.js"



const postPlant = async (req,res)=>{
    const {name,
        category,
        img,
        price,
        description
    } = req.body

    const newPlant = new Plant({
            name:name,
            img:img,
            price:price,
            category:category,
            description:description
    })


    const savedPlant = await newPlant.save();
    // if(!name){
    //     res.json({
    //         success:false,
    //         data:null,
    //         message:"pla add name"
    //     })
    // }
    // if(!img){
    //     res.json({
    //         success:false,
    //         data:null,
    //         message:"plz add img"
    //     })
    // }

    // const randomId = Math.round(Math.random() * 10000)

    // const newPlant = {
    //     id: randomId,
    //     name:name,
    //     img:img,
    //     price:price,
    //     category:category,
    //     description:description
    // }

    // plants.push(newPlant)

    res.json({
        success:true,
        data:savedPlant,
        message:"new palnt added successfully"
    })
}

const getPlants = async (req,res)=>
    {
      const allPlants = await Plant.find()

        res.json({
            success:true,
            data:allPlants,
            message:"all plants fetch successfully"
        })
    }

const getPlantId = async (req,res)=>{
    const {id} = req.params

    const plant = await Plant.findOne({
        _id:id
    })
    res.json({
        success:plant ? true : false,
        data:plant,
        message: plant ? "plant fetch successfully" : "plant not found"
    })
}

//update
const putPlantId = async (req,res)=>
    {
    const {
        name,
        category,
        img,
        price,
        description
    } = req.body
    
        const {id} = req.params
    
await Plant.updateOne({_id:id},
    {
        $set: {
            name:name,
            img:img,
            price:price,
            category:category,
            description:description
}})

const updatedPlant = await Plant.findById(id)

res.json({
    success:true,
    message:"plant updated successfully",
    data:updatedPlant
})

    }

const deletePlantId = async  (req,res) =>{

    const  {id} = req.params
     
    await Plant.deleteOne({
        _id: id
    })
        res.json({
            success : true,
            message : "plant delete successfully",
            data :null
        })
    }




export {postPlant,
    getPlants,
    getPlantId,
    putPlantId,
    deletePlantId
}
import Plant from "../models/Plant.js"


const plants = []

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

const getPlantId = (req,res)=>{
    const {id} = req.params

    const plant = plants.find((p)=>p.id == id)

    res.json({
        success:plant ? true : false,
        data:plant,
        message: plant ? "plant fetch successfully" : "plant not found"
    })
}

const putPlantId = (req,res)=>
    {
    const {
        name,
        category,
        img,
        price,
        description
    } = req.body
    
        const {id} = req.params
    
        let index = -1
    
        plants.forEach((plant, i)=>{
            if(plant.id == id){
                index= i
            }
        })
    
    
    const newObj = {
        id ,
        name,
        category,
        img,
        price,
        description
    }
    
    if(index == -1){
       return res.json({
            success:false,
            data:null,
            message: `plant not found for this id ${id}`
        })
    }
    
    else{
        plants[index] = newObj
    
        return res.json({
            success:true,
            data:newObj,
            message: `plant update successfully` 
        })
    }
    
    }

const deletePlantId =  (req,res) =>{

    const  {id} = req.params
    
        let index = -1
    
        plants.forEach((plant,i)=>{
            if(plant.id==id){
                index = i
            }
        })
    
        if(index==-1){
           return res.json({
                success : false,
                message : `plant not found with id ${id}`
                
            })
        }
    
        plants.splice(index,1)
    
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
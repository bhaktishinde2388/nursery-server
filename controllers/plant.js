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

const postPlant = (req,res)=>{
    const {name,
        category,
        img,
        price,
        description
    } = req.body

    if(!name){
        res.json({
            success:false,
            data:null,
            message:"pla add name"
        })
    }
    if(!img){
        res.json({
            success:false,
            data:null,
            message:"plz add img"
        })
    }

    const randomId = Math.round(Math.random() * 10000)

    const newPlant = {
        id: randomId,
        name:name,
        img:img,
        price:price,
        category:category,
        description:description
    }

    plants.push(newPlant)

    res.json({
        success:true,
        data:newPlant,
        message:"new palnt added successfully"
    })
}

const getPlants = (req,res)=>
    {
        res.json({
            success:true,
            data:plants,
            message:"all olants fetch successfully"
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
const mongoose=require('mongoose')
const user_schema=mongoose.Schema({
    name:{
        type:String,
        requiere:true

    },
    lastname:{
        type:String,
        requiere:true

    },
    age:{
        type:Number,
        requiere:true


    },
    email:{
        type:String,
        requiere:true


    }
})
module.exports=mongoose.model('user_document',user_schema)
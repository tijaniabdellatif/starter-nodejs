import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    firstname:{
        type:String,
        trim:true
    },

    lastname:{

         type:String,
         trim:true
    },

    accountCreated:{

         type:Date,
         default:new Date()  
        
    }
},{

      timestamps:true
})


export const User = mongoose.model('User',userSchema);
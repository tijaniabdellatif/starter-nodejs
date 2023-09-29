import { connectDatabase } from "../config/database.js";
import { User } from "../models/User.js";


export const createUser = async (req,res) => {

    

    const {firstname,lastname} = req.body;

    await connectDatabase();

    const user = await User.create({
         
        firstname: firstname,
        lastname: lastname
    })

    if(user){


        res.status(201).json({
             data:user
        })
    }

}
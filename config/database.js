import mongoose from "mongoose";
import "dotenv/config.js";

let isConnected = false;

export const connectDatabase = async () => {


      console.log(process.env.MONGO_URL);

      mongoose.set('strictQuery',true);


      if(isConnected){

           console.log("im already connected");
           return;
      }


      try{

        await mongoose.connect(process.env.MONGO_URL,{

              dbName:'ecommercedb'
        })

        console.log('im connected')

      }catch(e){

                console.log(e.message);
                throw new  Error('Something is wrong 500')
      }

}

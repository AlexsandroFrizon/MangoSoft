import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://alexsandrofrizon21:DNVNKut6hBPUHobO@cluster0.m7fhv.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}

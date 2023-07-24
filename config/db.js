const mongoose=require('mongoose');
const color=require('colors')

const connectDB=async(req,res)=>{
   try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Database connected".bgCyan.white)
   } catch (error) {
    console.log(error)
   }
}
module.exports=connectDB
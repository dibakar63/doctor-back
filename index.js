const express=require('express');
const colors=require('colors');
const morgan=require('morgan');
const dotev=require('dotenv');
const cors=require('cors');
const connectDB=require('./config/db')
const authRouter=require('./routes/authRoute')
dotev.config()
connectDB()
const app=express();
const port=process.env.port || 8080;

app.get('/',(req,res)=>{
    res.send("Server is working")
})

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/api/v1/user',authRouter)
app.use('/api/v1/admin',require('./routes/adminRoutes'))
app.use('/api/v1/doctor',require('./routes/doctorRoute'))
app.listen(port,(req,res)=>{
    console.log(`server is running on port ${process.env.PORT} & in ${process.env.NODE_MODE}`.bgCyan.white)
})
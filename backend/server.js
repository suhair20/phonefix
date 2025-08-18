import express from 'express' 
import mongoose from 'mongoose'
 import cors from 'cors'
 import dotenv from 'dotenv'



 dotenv.config()
 const app =express()
 const PORT= process.env.PORT ||5000;


 app.use(cors())
 app.use(express.json());



 mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true
 })
.then(() => console.log("✅ MongoDB Connected..."))
.catch(err => console.error("❌ MongoDB Connection Error:", err));


 app.get('/',(req,res)=>{
    res.send('server is running...')
 });




 mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error("❌ Database connection failed", err));
     
    
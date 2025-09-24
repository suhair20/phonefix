import express from 'express' 
import mongoose from 'mongoose'
 import cors from 'cors'
 import dotenv from 'dotenv'

import userRoute from './routes/userRoutes.js'

 dotenv.config()
 const app =express()
 const PORT= process.env.PORT ||5000;

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}))  

 app.use(express.json());


 app.use('/api/users',userRoute)




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
     
    




//   // app.js
// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';

// import userRoute from './routes/userRoutes.js';

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
// app.use(express.json());

// // Routes
// app.use('/api/user', userRoute);

// // Test root route
// app.get('/', (req, res) => res.send('Server is running...'));

// // Connect to MongoDB and start server
// const startServer = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('✅ MongoDB Connected...');
//     app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
//   } catch (err) {
//     console.error('❌ Database connection failed', err);
//   }
// };

// startServer();

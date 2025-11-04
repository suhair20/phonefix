import express from 'express'
const userRoute=express.Router()
import * as usercontroller from '../controllers/UserController.js';





userRoute.post('/register',usercontroller.registration)
userRoute.post('/verifyotp',usercontroller.verifyotp)







export default userRoute
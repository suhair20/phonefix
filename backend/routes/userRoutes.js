import express from 'express'
const userRoute=express.Router()
import * as usercontroller from '../controllers/UserController.js';
import * as UserCheckAuth from '../middleware/UserCheckAuth.js'





userRoute.post('/register',usercontroller.registration)
userRoute.post('/verifyotp',usercontroller.verifyotp)
userRoute.get('/UserCheckAuth',UserCheckAuth.UserCheckAuth,usercontroller.checkAuth)
userRoute.post('/login',usercontroller.login)







export default userRoute
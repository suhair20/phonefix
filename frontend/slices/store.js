
import {combineReducers,configureStore} from "@reduxjs/toolkit"
import { userSlice } from "./userSlice"
import { AdminSlice } from "./AdminSlice"
import Authreducer from './AuthSlice'
import AdminAuthReducer from './AdminAuth'
import Cartreducer from './CartSlice'








 const rootReducer=combineReducers({
[userSlice.reducerPath]:userSlice.reducer,
[AdminSlice.reducerPath]:AdminSlice.reducer,
 cart: Cartreducer, 
auth:Authreducer,
adminAuth:AdminAuthReducer

 })


const store=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(
            userSlice.middleware,
            AdminSlice.middleware,
            
        )
})

export default store
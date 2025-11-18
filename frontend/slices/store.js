
import {combineReducers,configureStore} from "@reduxjs/toolkit"
import { userSlice } from "./userSlice"

import Authreducer from './AuthSlice'







 const rootReducer=combineReducers({
[userSlice.reducerPath]:userSlice.reducer,
auth:Authreducer

 })


const store=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(
            userSlice.middleware

        )
})

export default store
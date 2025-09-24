
import {combineReducers,configureStore} from "@reduxjs/toolkit"
import { userSlice } from "./userSlice"






 const rootReducer=combineReducers({
[userSlice.reducerPath]:userSlice.reducer

 })


const store=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(
            userSlice.middleware

        )
})

export default store
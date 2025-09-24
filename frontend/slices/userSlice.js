import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



const baseQuery=fetchBaseQuery({baseUrl:"http://localhost:5000",
  credentials:"include"
})


export const userSlice= createApi({
    reducerPath:"userapi",
    baseQuery,
    endpoints:(builder)=>({
        signup:builder.mutation({
            query:(data)=>({
                url:'/api/user/register',
                method:'POST',
                body:data
            })
        })
    })
    
})

export const {
    useSignupMutation
}=userSlice
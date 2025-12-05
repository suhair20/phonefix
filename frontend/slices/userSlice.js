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
        }),



        verifyOtp:builder.mutation({
            query:(data)=>({
                url:'/api/user/verifyotp',
                method:'POST',
                body:data
            })
        }),

        checkAuth:builder.query({
            query:()=>({
                url:'/api/user/UserCheckAuth',
                method:'GET',
                   credentials: "include" 

            })
        }),
        

        login:builder.mutation({
            query:(data)=>({
                url:'/api/user/login',
                method:'POST',
                body:data
            })
        })



    })
    
})

export const {

    useSignupMutation,
    useVerifyOtpMutation,
    useCheckAuthQuery,
    useLoginMutation,

}=userSlice
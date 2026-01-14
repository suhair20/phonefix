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
        }),

addAddress: builder.mutation({
  query: (data) => ({
    url: "/api/user/addaddress",
    method: "POST",
    body:data,
    credentials: "include",
  }),
}),

GetProductByIdQuery:builder.query({
    query:(id)=>({
   url:`/api/user/productbyId/${id}`,
   method:"GET",
   credentials:"include"
    })
}),




        getAddress: builder.query({
         query: () => ({
          url: "/api/user/get-address",
          method:'GET',
         credentials: "include",
                  })
         }),



         getLatestProducts:builder.query({
         query:(limit=5)=>({
         url:`/api/user/products/latest?limit=${limit}`,
         method:'GET',
         credentials:"include"
         })

         }),

         getCategories: builder.query({
          query: () => ({
         url: "/api/user/categories",
          method: "GET",
            }),
}),


        GetProductsByCategory:builder.query({
            query:(id)=>({
               url:`/api/user/productbycategory/${id}`,
               method:"GET"  
            })
        })


    })
    
})

export const {

    useSignupMutation,
    useVerifyOtpMutation,
    useCheckAuthQuery,
    useLoginMutation,
    useGetAddressQuery,
    useAddAddressMutation   ,
    useGetLatestProductsQuery,
    useGetProductByIdQueryQuery,
    useGetCategoriesQuery,
    useGetProductsByCategoryQuery

}=userSlice
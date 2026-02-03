import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



const BASE_URL =
  import.meta.env.DEV
    ? "http://localhost:5000"
    : "https://phonefix-i73f.onrender.com";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
});

export const AdminSlice= createApi({
    reducerPath:"adminapi",
    baseQuery,
    endpoints:(builder)=>({



     adminlogin:builder.mutation({
            query:(data)=>({
                url:'/api/admin/Adminlogin',
                method:'POST',
                body:data
            })
        }),


          addCategory:builder.mutation({
            query:(data)=>({
             url:'/api/admin/addCategory',
             method:'POST',
             body:data,
             credentials:"include",
            })
            

         }),


         getCategory:builder.query({
            query:()=>({
             url:'/api/admin/getCategory',
             method:'GET',
             credentials:"include",
            }),
             providesTags: ["Category"],

         }),



          toggleCategory: builder.mutation({
      query: (id) => ({
        url: `/api/admin/category/${id}`,
        method: "PATCH",
        credentials: "include",
      }),
      invalidatesTags: ["Category"],
    }),


    addProduct: builder.mutation({
      query: (formData) => ({
        url: "/api/admin/product",
        method: "POST",
        body: formData,
        credentials: "include",
      }),
      invalidatesTags: ["Product"],
    }),


    getProducts: builder.query({
      query: () => ({
        url: "/api/admin/products",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Product"],
    }),

    updateProduct: builder.mutation({
  query: ({ id, formData }) => ({
    url: `/api/admin/product/${id}`,
    method: "PUT",
    body: formData,
    credentials: "include",
  }),
  invalidatesTags: ["Product"],
}),

getProductById: builder.query({
  query: (id) => ({
    url: `/api/admin/editproduct/${id}`,
    method: "GET",
    credentials: "include",
  }),
  providesTags: ["Product"],
}),

deleteProduct: builder.mutation({
  query: (id) => ({
    url: `/api/admin/deletProduct/${id}`,
    method: "DELETE",
    credentials: "include",
  }),
  invalidatesTags: ["Product"],
}),




         admincheckAuth:builder.query({
            query:()=>({
                url:'/api/admin/AdminCheckAuth',
                method:'GET',
                   credentials: "include" 

            }),

       







            
        })




       
        

       





        

    })
    
})

export const {
useAdminloginMutation,
useAdmincheckAuthQuery,
useAddCategoryMutation,
useGetCategoryQuery,
useToggleCategoryMutation,
useAddProductMutation,
 useGetProductsQuery, 
 useGetProductByIdQuery,  
 useUpdateProductMutation,
 useDeleteProductMutation,

}=AdminSlice
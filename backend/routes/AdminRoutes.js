import express from 'express'
const AdminRoute=express.Router()

import * as AdminController from '../controllers/AdminController.js'
import * as AdminCheckAuth from '../middleware/AdminCheckAuth.js'

import  upload from "../middleware/multer.js"

AdminRoute.post('/Adminlogin',AdminController.adminlogin)
AdminRoute.get('/AdminCheckAuth',AdminCheckAuth.adminAuth,AdminController.checkAuth)
AdminRoute.post('/addCategory',AdminCheckAuth.adminAuth,AdminController.addCategory)
AdminRoute.get('/getCategory',AdminCheckAuth.adminAuth,AdminController.getcategories)
AdminRoute.patch("/category/:id", AdminCheckAuth.adminAuth, AdminController.toggleCategory);
AdminRoute.post("/product",AdminCheckAuth.adminAuth,upload.array("images",4),AdminController.addProduct)
AdminRoute.get("/products",AdminCheckAuth.adminAuth,AdminController.getProducts)
AdminRoute.get('/editproduct/:id',AdminCheckAuth.adminAuth,AdminController.editproduct)
AdminRoute.put("/product/:id",AdminCheckAuth.adminAuth,upload.array("images", 4),AdminController.updateProduct);
AdminRoute.delete("/deletProduct/:id",AdminCheckAuth.adminAuth,AdminController.deleteProduct)
export default AdminRoute
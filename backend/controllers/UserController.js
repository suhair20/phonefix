
import bcrypt from 'bcrypt'

import { otpService } from '../Services/otpService.js';
import User from '../models/userModel.js';
import Jwt from '../Services/jwt.js';
import Address from '../models/Address.js'
import Product from '../models/product.Model.js'
import categories from '../models/CategoryModel.js'
import Cart from '../models/cartModel.js'
 
export const registration = async (req, res) => {
  try {
    const { email, Password } = req.body;

    const existing = await User.findOne({ email });

    
    if (existing) {
      
      if (!existing.isVerified) {
        await otpService.sendOtp(email);
        return res.status(200).json({ success: true, message: "OTP resent" });
      }

   
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    
    const hashedPassword = await bcrypt.hash(Password, 10);

  
    const newUser = new User({
      email,
      Password: hashedPassword,
      isVerified: false,
    });

    await newUser.save();

    
    await otpService.sendOtp(email);

    res.status(201).json({
      success: true,
      message: "User created, OTP sent",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



////////////////////////////////////





export const verifyotp = async (req, res) => {
  try {
    console.log("Verify OTP route hit");

    const { email, otp } = req.body;
    console.log("📩 Incoming:", req.body);

    const isValid = await otpService.verifyOtp(email, otp);

    if (!isValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired OTP" });
    }

    // Update verification status
    await User.updateOne({ email }, { $set: { isVerified: true } });

    // Get the user to generate token correctly
    const user = await User.findOne({ email });

    const token =  Jwt.genrateToken({
      id: user._id,
      email: user.email,
    });

  res.cookie("token", token, {
  httpOnly: true,
  secure: false,       
  sameSite: "strict",
  maxAge: 24 * 60 * 60 * 1000 
});

return res.json({
  success: true,
  user: user
});


  } catch (error) {
    console.error("OTP Verify Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};





///////////////////////////////////


export const login = async (req, res) => {
  try {
 
    
    const { email, Password } = req.body;
   

    // Find user
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(Password, existingUser.Password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    // Generate token
    const token = Jwt.genrateToken({
      id: existingUser._id,
      email: existingUser.email,
    });

    // Send cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // Success response
    return res.json({
      success: true,
      user: existingUser,
    });

  } catch (error) {
    console.error("login error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};





//////////////////////////////////////////



export const checkAuth =async (req,res)=>{
  
  
   return res.json({
    success: true,
    user: req.user,
  });
}


export const addAddress = async (req, res) => {
   try { 

    console.log("its comiuuuchelo");
    
    const userId = req.user.id; 
    const {
       fullName, 
      phone,
       district,
        city,
         pincode,
          addressLine,
           landmark, } = req.body;



     const address = await Address.create( { userId ,
        fullName,
         phone,
          district,
           city, 
           pincode,
            addressLine, 
            landmark, 
            state: "Kerala", },
        ); 
       return res.json({ success: true, message: "Address saved successfully", address, }); } 
       catch (err) 
       { return res.status(500).json({ success: false, message: err.message }); } };





        export const getAddress = async (req, res) => { 
          try { 
            
            console.log("cominghghghghsfd");
            

            const userId = req.user.id;
            
            const addresses = await Address.find({ userId });
            console.log('verunnu',addresses);
            
            return res.json({ success: true, addresses });
           } 
           
           catch (err) { 
            return
             res.status(500).json({ success: false, message: err.message }); 
            } };





            export const getLatestProducts =async (req,res)=>{
              try {

                 const limit = Number(req.query.limit) || 5;
   
    
              const products = await Product.find({is_active: true })
                   .sort({ createdAt: -1 })
                   .limit(limit);


 
                 res.status(200).json(products)
                
              } catch (error) {
                 console.error("LATEST PRODUCT ERROR:", error.message);
  console.error(error);
  res.status(500).json({ message: error.message });
                
              }
            }



       
export const getproductById = async (req, res) => {
  try {
    const { id } = req.params;

  
  
    if (!id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log(
      'zkjdk'
    );
    
    console.error("getproductById error:", error);
    res.status(500).json({ message: "Server error" });
  }
};



export const getcategories =async (req,res)=>{
  try {
const Categories= await categories.find()




  if (!Categories) {
      return res.status(404).json({ message: "Product not found" });
    }

   res.status(200).json(Categories);  

    
  } catch (error) {
    console.log(error);
    
  }
}


export const productbycategory =async(req,res)=>{
  try {
 const { id } = req.params;
 
 
// Add .populate('category') to get the full category object
   const cproducts = await Product.find({ category: req.params.id }).populate('category');
   console.log('categoey',cproducts);
   
      if (!cproducts) {
      return res.status(404).json({ message: "Product not found" });
    }

   res.status(200).json(cproducts);
  } catch (error) {

    console.log(error);
    
  }
} 


////////////////////////////////////



export const addToCart = async (req, res) => {
  try {
    console.log('hrloo');
    
    const userId = req.user.id // assuming you have auth middleware
    const { productId, quantity = 1 } = req.body;

    // 1️⃣ Fetch product price from DB (never trust frontend)
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const price = product.price;
    const totalPrice = price * quantity;

    // 2️⃣ Find or create cart
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, products: [] });
    }

    // 3️⃣ Check if product already in cart
    const existingProductIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (existingProductIndex > -1) {
      // update quantity & totalPrice
      cart.products[existingProductIndex].quantity += quantity;
      cart.products[existingProductIndex].totalPrice = cart.products[existingProductIndex].quantity * price;
    } else {
      cart.products.push({ productId, quantity, price, totalPrice });
    }

    // 4️⃣ Recalculate cartTotal
    cart.cartTotal = cart.products.reduce((sum, item) => sum + item.totalPrice, 0);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};




////////////////////// GET USER CART



export const getCart = async (req, res) => {
  try {
    
    
    const userId = req.user.id;
    const cart = await Cart.findOne({ user: userId }).populate("products.productId", "name price images");
   
    
    
    
    if (!cart) return res.status(404).json({ message: "Cart is empty" });
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};






/////////////////////// UPDATE QUANTITY



export const updateCart = async (req, res) => {
  try {
   
    
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (productIndex === -1) return res.status(404).json({ message: "Product not in cart" });

    const product = await Product.findById(productId);
    cart.products[productIndex].quantity = quantity;
    cart.products[productIndex].totalPrice = quantity * product.price;

    // Recalculate cartTotal
    cart.cartTotal = cart.products.reduce((sum, item) => sum + item.totalPrice, 0);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};





///////////////////////////////// REMOVE PRODUCT FROM CART




export const removeFromCart = async (req, res) => {
  try {
    console.log("hiiiiii");
    
    const userId = req.user.id;
    const { productId } = req.params;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = cart.products.filter(p => p.productId.toString() !== productId);

    // Recalculate cartTotal
    cart.cartTotal = cart.products.reduce((sum, item) => sum + item.totalPrice, 0);

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
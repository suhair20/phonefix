
import bcrypt from 'bcrypt'

import { otpService } from '../Services/otpService.js';
import User from '../models/userModel.js';
import Jwt from '../Services/jwt.js';
import Address from '../models/Address.js'

 
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
      secure: false,
      sameSite: "strict",
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
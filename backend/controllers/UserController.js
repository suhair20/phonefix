
import bcrypt from 'bcrypt'

import { otpService } from '../Services/otpService.js';
import User from '../models/userModel.js';
import Jwt from '../Services/jwt.js';

 
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


  export const verifyotp =async (req,res)=>{
  try {
    console.log("vaniii");
    

    const { email, otp } = req.body;

    console.log("📩 Verify OTP route hit", req.body);

      const isValid = await otpService.verifyOtp(email, otp);
      if (!isValid)
        return res.status(400).json({ success: false, message: "Invalid or expired OTP" });

 
    await User.updateOne({ email }, { $set: { isVerified: true } });

   const token = jwtToken.generateToken({
      id: User._id,
      email: User.email,
    });

    res.status(200).json({
      success: true,
      message: "OTP verified successfully",
      user,
      token,
    });


  
 } catch (error) {
  console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
 }

}
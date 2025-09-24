// import User from '../models/userModel.js';
// import bcrypt from 'bcryptjs';  // optional if you want to hash passwords

// Securely hash password (optional but recommended)
// const securePassword = async (password) => {
//   const hash = await bcrypt.hash(password, 10);
//   return hash;
// };

// Registration controller
export const registration = async (req, res) => {
  try {
    console.log("come regitration");
    
    const { name, email, password } = req.body;

    // Hash password before saving
    // const hashedPassword = await securePassword(password);

    // // Create new user
    // const newUser = new User({
    //   name,
    //   email,
    //   password: hashedPassword
    // });

    // await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

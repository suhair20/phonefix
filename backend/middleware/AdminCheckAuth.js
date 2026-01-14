import jwt from "../Services/jwt.js";

export const adminAuth = (req, res, next) => {
  const token = req.cookies.adminToken;
  if (!token) return res.status(401).json({ message: "Not authenticated" });

  try {

    console.log('heiiiii',token);
    
    const decoded = jwt.verifyToken(token)

    if (!decoded.isAdmin)
      return res.status(403).json({ message: "Not authorized" });

    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

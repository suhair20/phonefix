
import jwt from "../Services/jwt.js";

export function UserCheckAuth(req, res, next) {

  
  const token = req.cookies.token;

  console.log("it onn the way ");
  
  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }

  try {
    const user = jwt.verifyToken(token)
    req.user = user;


    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

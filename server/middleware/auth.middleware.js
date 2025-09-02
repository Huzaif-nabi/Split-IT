import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1]; 

    if (!token) {
      return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Attach user info to request
    req.user = decoded; 

    next(); 
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token", error: err.message });
  }
};

export default authMiddleware;

const jwt = require("jsonwebtoken");
const UserModel = require("../models/user-model");

module.exports.authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) return res.status(403).send("Access denied. Invalid token.");
    //get user info and store it
    const user = await UserModel.findOne({ email: decoded.email }).select(
      "-password"
    );

    if (!user) return res.status(404).json({ message: "User not found." });

    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({ message: "Access denied. Invalid token." });
  }
};

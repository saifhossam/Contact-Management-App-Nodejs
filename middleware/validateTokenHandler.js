const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized - No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.user = decoded.user;
        next();
    } catch (err) {
        return res.status(403).json({ message: "Forbidden - Invalid or expired token" });
    }
};

module.exports = validateToken;

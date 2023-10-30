import jwt from "jsonwebtoken";
import { config } from "../infra/global_config.js";
const secretKey = config.key;

function generateToken(payload) {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

const verifyToken = (token) => {
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded;
    } catch (error) {
      return null;
    }
  };

export default{
    generateToken,
    verifyToken
}
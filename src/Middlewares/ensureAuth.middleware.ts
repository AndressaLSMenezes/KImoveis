import "dotenv/config";
import jwt, { Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";


const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY as Secret, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: error.message,
      });
    }

    req.body.user = {
      id: decoded.sub as number,
      isAdm: decoded.isAdm as boolean,
    };

    // console.log(req.body.user);

    return next();
  });
};

export default ensureAuthMiddleware;

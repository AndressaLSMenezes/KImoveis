import { Request, Response, NextFunction } from "express";

const verifyIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  if (!req.body.user.isAdm) {
    return res.status(403).json({ message: "Is not Adm" });
  }
  return next();
};

export default verifyIsAdmMiddleware;

import { NextFunction, Request, Response } from "express";
import { IUserToken } from '../../interfaces/IUserToken';
import { JwtPayload } from 'jsonwebtoken';
import jwt from "jsonwebtoken";	

export default async function verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
        const token = await req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({message: "No token provided"});
        }
        jwt.verify(token, "secretkey", (err: any, decoded: any) => {
            if (err) return res.status(401).json({message: "Unauthorized!"});
            const { user } = (decoded as JwtPayload & IUserToken);
            req.body.user = user;
            next();
        })
    } catch (error) {
        console.log(error);
    }
};
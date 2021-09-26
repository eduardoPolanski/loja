import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string
}

export function isAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authtoken = request.headers.authorization;

    if(!authtoken) {
        return response.status(401).end();
    }

    const [,token] = authtoken.split(" ")
    try {
    const {sub } = verify(token, "e201994dca9320fc94336603b1cfc970") as IPayload;

    request.user_id = sub

    next();

    } catch(err) {
        return response.status(401).end()
    }
}
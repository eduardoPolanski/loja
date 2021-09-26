import { NextFunction, Request, Response } from "express";
import user from "../modules/users/models/userModel";

export async function isAdmin(request: Request, response: Response, next: NextFunction) {

    const { user_id } = request

    console.log(user_id)
    
    const { admin } = await user.findOne({_id: user_id})
    
    //Verificar se a conta é do administrador 
    if(admin) {
        return next()
    }

    return response.status(401).json({
        error: "Unauthorized"
    });
}


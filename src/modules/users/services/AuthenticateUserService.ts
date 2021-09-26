import { compare } from "bcrypt";
import user from "../models/userModel"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest){
        const userExists = await user.findOne({email});

        if(!userExists){
            throw new Error("Email/Password incorrect")
        }

        const passwordMatch = await compare(password, userExists.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorrect")
        }

        const token = sign({
                email: userExists.email 
            }, "e201994dca9320fc94336603b1cfc970", {
                subject: userExists.id,
                expiresIn: "30d"
            }
        );  

        return token
    }
}

export { AuthenticateUserService }
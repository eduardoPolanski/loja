import userModel from '../models/userModel'

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string
}

class CreateUserService{
    async execute({name, email, admin, password}: IUserRequest) {

        if(!email) {
            throw new Error("Email incorrect! ")
        }

        const userAlreadyExists = await userModel.findOne({email});

        if (userAlreadyExists){
            throw new Error("User already exists! ")
        }
        const user = await userModel.create({
            name,
            email,
            admin,
            password
        });

        user.save()
        
        return user;

    }
}

export { CreateUserService }
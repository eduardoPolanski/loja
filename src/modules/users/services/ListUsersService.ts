
import userModel from "../models/userModel"


class ListUsersService {
    async execute(){
        
        const users = userModel.find();

        return users;
    }
}

export { ListUsersService }
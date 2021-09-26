import { Router } from "express"
import { CreateUserController } from "../modules/users/controllers/CreateUserController" 
import { AuthenticateUserController } from "../modules/users/controllers/AuthenticateUserController"
import { ListUsersController } from "../modules/users/controllers/ListUsersController"
import { isAdmin } from "../middlewares/isAdmin"
import { isAuthenticated } from "../middlewares/isAuthenticated"

const userRouter = Router()

const userController = new CreateUserController()
const listUsersController = new ListUsersController
const authenticateUserController = new AuthenticateUserController()

userRouter.post("/signup", userController.handle)
userRouter.get("/users", listUsersController.handle)

userRouter.post("/login", authenticateUserController.handle)


export { userRouter }
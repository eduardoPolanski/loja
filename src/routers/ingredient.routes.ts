import { Router } from "express"
import { isAdmin } from "../middlewares/isAdmin"
import { isAuthenticated } from "../middlewares/isAuthenticated"
import { CreateIngredientController } from "../modules/ingredients/controllers/CreateIngredientController"
import { ListIngredientsController } from "../modules/ingredients/controllers/ListIngredientsController"

const ingredientRouter = Router()

const ingredientController = new CreateIngredientController()
const listIngredientController = new ListIngredientsController()

ingredientRouter.post("/ingredients", isAuthenticated, isAdmin, ingredientController.handle)
ingredientRouter.get("/ingredients", listIngredientController.handle)


export { ingredientRouter }
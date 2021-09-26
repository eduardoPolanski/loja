import { Request, Response} from "express"
import { CreateIngredientService } from "../services/CreateIngredientService"

class CreateIngredientController {
    async handle(request: Request, response: Response){
        const {name, unit, price}  = request.body

        const createIngredientService = new CreateIngredientService
        const ingredient = await createIngredientService.execute({name, unit, price})
        
        return response.send(ingredient)
    }
}

export { CreateIngredientController }
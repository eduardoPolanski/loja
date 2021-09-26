
import ingredientModel from "../models/ingredientModel"


class ListIngredientsService {
    async execute(){
        
        const listIngredients = ingredientModel.find();

        return listIngredients;
    }
}

export { ListIngredientsService }
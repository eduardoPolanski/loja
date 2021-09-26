import ingredientModel from "../models/ingredientModel";


interface IIngredientRequest {
    name: string,
    unit: string,
    price: number
}

class CreateIngredientService {
    async execute({name, unit, price}: IIngredientRequest) {

        const ingredientAlreadyExists = await ingredientModel.findOne({name});

        if (ingredientAlreadyExists){
            throw new Error("Ingredient already exists! ")
        }

        const ingredient = await ingredientModel.create({
            name,
            unit,
            price
        });

        ingredient.save()
        
        return ingredient;

    }
}

export {CreateIngredientService}
import { Schema, model, connection } from "mongoose";

type IngredientType = {
    name: string,
    unit: string,
    price: number
}

const schema = new Schema<IngredientType>({
    name: {type: String, required: true},
    unit: {type: String, required: true},
    price:{type: Number, required: true}
});

const modelName: string = "Ingredient"

export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
:
    model<IngredientType>(modelName, schema)


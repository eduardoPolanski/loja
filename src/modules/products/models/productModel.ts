import { Schema, model, connection} from "mongoose";

type ProductType = {
    name: string,
    image: string,
    price: number,
    stock: number,
    ingredients: Schema.Types.ObjectId
}

const schema = new Schema<ProductType>({
    name: {type: String, required: true},
    image: {type: String, required: true},
    price:{type: Number, required: true},
    stock:{type: Number, required: true},
    ingredients: [{type: Schema.Types.ObjectId, ref:"Ingredient", required: true}]
});

const modelName: string = "Product"

export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
:
    model<ProductType>(modelName, schema)
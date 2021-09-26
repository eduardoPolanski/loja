import { Schema, model, connection} from "mongoose";

type SellProductType = {
    nameProduct: string,
    price: number,
    amount: number,
}

const schema = new Schema<SellProductType>({
    nameProduct: {type: String, required: true},
    price:{type: Number, required: true},
    amount:{type: Number, required: true},
});

const modelName: string = "SellProduct"

export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
:
    model<SellProductType>(modelName, schema)
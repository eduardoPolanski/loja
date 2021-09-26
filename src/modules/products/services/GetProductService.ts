import productModel from "../models/productModel"

interface IGetProductRequest {
    name: string;
}

class GetProductService {
    async execute({name}:IGetProductRequest){
        
        const product = await productModel.findOne({name}).populate("ingredients",["name","price"])
        

        return product;
    }
}

export { GetProductService }
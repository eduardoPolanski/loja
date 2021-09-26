import productModel from "../models/productModel"

interface IDeleteProductRequest {
    name: string;
}

class DeleteProductService {
    async execute({name}:IDeleteProductRequest){
        
        const product = await productModel.findOneAndDelete({name})
        
        if(!product) {
            throw Error ("Product not found")
        }

        return product;
    }
}

export { DeleteProductService }
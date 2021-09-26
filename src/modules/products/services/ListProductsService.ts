
import productModel from "../models/productModel"


class ListProductsService {
    async execute(){
        
        const product = productModel.find().populate("ingredients", "name");

        return product;
    }
}

export { ListProductsService }
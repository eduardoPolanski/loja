import productModel from '../models/productModel'

interface IProductRequest {
    name: string,
    image?: string,
    price: number;
    stock: number;
    ingredients: string;
}

class CreateProductService{
    async execute({name, image, price, ingredients, stock}: IProductRequest) {

        const productAlreadyExists = await productModel.findOne({name});

        if (productAlreadyExists){
            throw new Error("Product already exists! ")
        }
        const product = await productModel.create({
            name,
            image,
            price,
            ingredients,
            stock
        });

        product.save()
        
        return product;
    }
}

export { CreateProductService }
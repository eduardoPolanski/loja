import productModel from "../models/productModel";
import sellProduct from "../models/sellModel";

interface ISellRequest {
    nameProduct: string;
    amount: number;
    price: number;
}

class SellProductService{
    async execute({nameProduct, amount, price}: ISellRequest) {

        const newSellProduct = await productModel.findOne({name: nameProduct});
        console.log(newSellProduct)
   
        if (!newSellProduct){
            throw new Error("Product not exists! ")
        }

        if (newSellProduct.stock < amount){
            throw new Error("Product out of stock! ")
        }

        const sell = await sellProduct.create({
            nameProduct,
            amount,
            price,
        });

        sell.save()
        
        
        return sell;

    }
}

export {SellProductService}
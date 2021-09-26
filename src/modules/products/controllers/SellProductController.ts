import { Request, Response} from "express"
import { SellProductService } from '../services/SellProductService'


class SellProductController {
        async handle(request: Request, response: Response){
            const {nameProduct, price, amount}  = request.body

            const sellProductService = new SellProductService()

            const sell = await sellProductService.execute({nameProduct, price, amount})

            return response.send(sell)
        }
    }
export { SellProductController }
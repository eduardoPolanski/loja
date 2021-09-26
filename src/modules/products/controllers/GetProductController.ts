import { Request, Response} from "express"
import { GetProductService } from "../services/GetProductService"


class GetProductController {
        async handle(request: Request, response: Response){
            const {name} = request.body

            const getProductService = new GetProductService()

            const product = await getProductService.execute({name})

            return response.send(product)
        }
    }
export { GetProductController }
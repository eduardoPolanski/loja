import { Request, Response} from "express"
import  {DeleteProductService}  from "../services/DeleteProductService"


class DeleteProductController {
        async handle(request: Request, response: Response){
            const {name} = request.params

            const deleteProductService = new DeleteProductService()

            const product = await deleteProductService.execute({name})
            console.log(product)
            return response.status(200).json(product)
        }
    }
export { DeleteProductController }
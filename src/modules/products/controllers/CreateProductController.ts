import { Request, Response} from "express"
import { CreateProductService } from '../services/CreateProductService'
import sharp from "sharp"

class CreateProductController {
        async handle(request: Request, response: Response){
            const {name, price, ingredients, stock}  = request.body
            var image = request.file.path
            
            await sharp(image).resize(200).toFormat('jpeg').toFile(`./public/media/${request.file.filename}.jpg`)

            image = request.file.filename

            const createProductService = new CreateProductService()

            const product = await createProductService.execute({name, image, price, ingredients, stock})

            return response.send(product)
        }
    }
export { CreateProductController }
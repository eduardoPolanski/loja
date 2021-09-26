import { Router } from "express"
import { CreateProductController } from "../modules/products/controllers/CreateProductController"
import { ListProductsController } from "../modules/products/controllers/ListProductsController"
import { SellProductController } from "../modules/products/controllers/SellProductController"
import { GetProductController } from "../modules/products/controllers/GetProductController" 

import multer from "multer"
import { isAdmin } from "../middlewares/isAdmin"
import { isAuthenticated } from "../middlewares/isAuthenticated"

//Configurando multer para upload de imagens
const upload = multer({
    dest: './tmp',
    fileFilter: (request, file, cb) => {
        const allowed: string[] = ['image/jpg', 'image/jpeg','image/png'];
        cb(null, allowed.includes(file.mimetype))
    },
    limits: {
        fileSize: 2000000
    }
})

const productRouter = Router()

const createProductController = new CreateProductController()
const listProductController = new ListProductsController()
const sellProductController = new SellProductController()
const getProductController = new GetProductController()

productRouter.post("/product", isAuthenticated, isAdmin, upload.single('image') ,createProductController.handle)
productRouter.get("/products", listProductController.handle)

productRouter.post("/sellproduct", isAuthenticated, isAdmin, sellProductController.handle)
productRouter.get("/productreport/:name", getProductController.handle)

export { productRouter }
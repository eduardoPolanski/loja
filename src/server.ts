import express, { Request, Response, NextFunction, Router } from 'express';
import cors from "cors"
import swaggerUi from "swagger-ui-express"
import "express-async-errors";
import mustache from 'mustache-express'
import path from "path"
import { mongoConnect } from './database'
import { ingredientRouter } from './routers/ingredient.routes';
import { productRouter } from  './routers/product.routes'
import { userRouter } from './routers/user.routes';

import swaggerDocs from "./swagger.json"

//conectar BD
mongoConnect();

const app = express()

app.use(cors())
//Configurar a View
app.set('view engine', 'mustache')
app.set('views', path.join(__dirname, 'views'))
app.engine('mustache', mustache())

app.use(express.static(path.join(__dirname, '../public')))
 

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

//Rotas
app.use(ingredientRouter)
app.use(productRouter)
app.use(userRouter)

app.use("/v1", ingredientRouter)
app.use("/v1", productRouter)
app.use("/v1", userRouter)

// Tratar erros
app.use((err: Error, request: Request, response:Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
})

//porta do servidor
app.listen(3333, () => console.log("Serve running port 3333"))
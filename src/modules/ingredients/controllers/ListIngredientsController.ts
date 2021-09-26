import { Request, Response } from "express";
import { ListIngredientsService } from "../services/ListIngredientsService";


class ListIngredientsController {
    async handle(request: Request, response: Response) {
        const listIngredientsService = new ListIngredientsService();

        const ingredient = await listIngredientsService.execute()

        return response.json(ingredient)
    }
}

export { ListIngredientsController }
import { Request, Response } from "express";
import { CreateRoleService } from "../services/aclService";

class CreateRoleController {
    async handle(request: Request, response: Response){
        const {name, description} = request.body

        const service = new CreateRoleService()

        const result = await service.execute(name, description)

        return response.json(result)
    }
}

export {CreateRoleController}
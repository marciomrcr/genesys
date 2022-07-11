import { Request, Response } from "express";
import { CreateRoleService } from "../service/CreateRoleService";

class CreateRoleController {
  async handle(request: Request, response: Response){
    const { name, description} =request.body

    const createRoleService = new CreateRoleService()

    const role = await createRoleService.execute({
      name,
      description,
      
    })

    return response.status(201).json(role)
  }
}

export {CreateRoleController}
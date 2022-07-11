import { Request, Response } from "express";
import { CreatePermissionService } from "../service/CreatePermissionService";

class CreatePermissionController {
  async handle(request: Request, response: Response){
    const { name, description, role_id } =request.body
    
    const createPermissionService = new CreatePermissionService()

    const permission = await createPermissionService.execute(
      name,
      description,
      role_id
         )

    return response.status(201).json(permission)
  }
}

export {CreatePermissionController}
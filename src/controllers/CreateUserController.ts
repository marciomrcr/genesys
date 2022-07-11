import { Request, Response } from "express";
import { CreateUserService } from "../service/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response){
    const { name, email, password, role_id } =request.body
    //const { role_id } = request

    const createUserService = new CreateUserService()

    const user = await createUserService.execute(
      name,
      email,
      password,
      role_id    )

    return response.status(201).json(user)
  }
}

export {CreateUserController}
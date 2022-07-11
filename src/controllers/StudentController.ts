import { Request, Response } from "express";
import { CreateStudentService } from "../service/StudentService";

class CreateStudentController {
  async handle(request: Request, response: Response){
    const { name, email, password } =request.body

    const createStudentService = new CreateStudentService()

    const student = await createStudentService.execute({
      name,
      email,
      password
    })

    return response.status(201).json(student)
  }
}

export {CreateStudentController}
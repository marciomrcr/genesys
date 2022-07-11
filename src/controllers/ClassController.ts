import { Request, Response } from "express";
import { ClassService } from "../service/ClassService";

class ClassController {
  async handle(request: Request, response: Response){
    const { name, time, course_id } =request.body
    //const { role_id } = request

    const classService = new ClassService()

    const classe = await classService.execute(
      name,
      time,
      course_id
       )

    return response.status(201).json(classe)
  }
}

export {ClassController}
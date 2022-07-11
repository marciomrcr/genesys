import { Request, Response } from "express";
import { CourseService } from "../service/CourseService";

class CourseController {
  async handle(request: Request, response: Response) {
    const { name } = request.body

    const courseService = new CourseService()

    const course = await courseService.execute(
      name

    )

    return response.status(201).json(course)
  }
}

export { CourseController }
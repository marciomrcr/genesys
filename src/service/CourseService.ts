import { prisma } from "../prisma";

class CourseService {
  async execute(name: string) {
    // Verifica se o usuário existe
    const courseAlreadyExists = await prisma.course.findFirst({
      where: {
        name,
      },
    });

    if (courseAlreadyExists) {
      return "Course already exists!";
      //throw new Error('Course already exists!')
    }

    // cadastra a permissão

    const course = await prisma.course.create({
      data: {
        name,     
        
      },
    });
    
    return course;
  }
}

export { CourseService };

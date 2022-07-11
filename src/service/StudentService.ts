import { hash } from "bcryptjs";
import { prisma } from "../prisma";

class CreateStudentService {
  async execute(name: string, email: string, password: string, enrollment_id: string) {
    // Verifica se o usuário existe
    const studentAlreadyExists = await prisma.student.findFirst({
      where: {
        name,
      },
    });

    if (studentAlreadyExists) {
      return "Student already exists!";
      //throw new Error('Student already exists!')
    }

    // cadastra a permissão
    const passwordHash = await hash(password, 8)
    //const student = await prisma.student.create({
    //   data: data: {
    //     name,
    //     password: passwordHash,
    //     email,
    //     role_id               
    // },
    // include: {
    //     roles: {
    //         select: {
    //             name: true
    //         }
    //     }
    // }
    //});
    //return student;
  }
}

export { CreateStudentService };

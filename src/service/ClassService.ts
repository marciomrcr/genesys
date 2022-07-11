import { timeCourse } from "@prisma/client";
import { prisma } from "../prisma";

class ClassService {
    async execute (name: string, time: timeCourse,  course_id: string ) {
        // Verifica se o usuário existe
        const classAlreadyExists = await prisma.class.findFirst({
            where: {
                name
            }
        })

        if(classAlreadyExists){
            return ('Class already exists!')
            //throw new Error('User already exists!')            
            }

        // cadastra a class
        
        const classe = await prisma.class.create({
            data: {
                name,
                time,
                course_id               
            },
            include: {
                courses: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return classe
    }
}

export {ClassService}


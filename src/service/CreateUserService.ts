import { hash } from "bcryptjs";
import { prisma } from "../prisma";

class CreateUserService {
    async execute (name: string, email: string, password: string, role_id: string ) {
        // Verifica se o usuário existe
        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if(userAlreadyExists){
            return ('User already exists!')
            //throw new Error('User already exists!')            
            }

        // cadastra o usuário
        const passwordHash = await hash(password, 8)
        const user = await prisma.user.create({
            data: {
                name,
                password: passwordHash,
                email,
                role_id               
            },
            include: {
                roles: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return user
    }
}

export {CreateUserService}


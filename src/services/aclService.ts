import { prisma } from '../prisma'

class CreateRoleService {
    async execute( name: string, description: string){
        const role = await prisma.role.create({
            data: {
                name,
                description
            }
        })

        return role
    }
}

export { CreateRoleService}
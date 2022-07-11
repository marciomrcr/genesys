import { prisma } from "../prisma";

interface IRoleRequest {
  name: string;
  description: string;
}

class CreateRoleService {
  async execute({ name, description }: IRoleRequest) {
    // Verifica se a regra existe
    const roleAlreadyExists = await prisma.role.findFirst({
      where: {
        name,
      },
    });

    if (roleAlreadyExists) {
      return "Role already exists!";
      //throw new Error('Role already exists!')
    }

    // cadastra a role

    const role = await prisma.role.create({
      data: {
        name,
        description,
      },
    });

    return role;
  }
}

export { CreateRoleService };

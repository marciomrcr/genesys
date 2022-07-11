import { prisma } from "../prisma";

class CreatePermissionService {
  async execute(name: string, description: string, role_id: string) {
    // Verifica se o usuário existe
    const permissionAlreadyExists = await prisma.permission.findFirst({
      where: {
        name,
      },
    });

    if (permissionAlreadyExists) {
      return "Permission already exists!";
      //throw new Error('Permission already exists!')
    }

    // cadastra a permissão

    const permission = await prisma.permission.create({
      data: {
        name,
        description,
        roles: {
          connect: {
            id: role_id,
          },
        },
      },
    });
    return permission;
  }
}

export { CreatePermissionService };

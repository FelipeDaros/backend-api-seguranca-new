import { BadRequestException, Injectable } from '@nestjs/common';
import { Permissions } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionsService {
  constructor(private readonly prismaService: PrismaService) {}

  public async createPermissions(
    createPermissionDto: CreatePermissionDto,
  ): Promise<Permissions> {
    const permissionExists = await this.prismaService.permissions.findFirst({
      where: {
        name: createPermissionDto.name,
      },
    });

    if (permissionExists)
      throw new BadRequestException('Permissão já existente');

    const permission = this.prismaService.permissions.create({
      data: {
        name: createPermissionDto.name,
      },
    });

    return permission;
  }

  public async findAll(): Promise<Permissions[]> {
    const permissions = await this.prismaService.permissions.findMany();

    return permissions;
  }

  public async findOne(id: number) {
    const permissionExists = await this.prismaService.permissions.findFirst({
      where: {
        id,
      },
    });

    if (!permissionExists)
      throw new BadRequestException('Permissão não encontrada');

    return permissionExists;
  }

  public async update(id: number, updatePermissionDto: UpdatePermissionDto) {
    const permissionExists = await this.prismaService.permissions.findFirst({
      where: {
        name: updatePermissionDto.name,
        NOT: { id },
      },
    });

    if (permissionExists)
      throw new BadRequestException('Permissão já existente');

    const dataUpdate = {
      ...permissionExists,
      ...updatePermissionDto,
    };

    return await this.prismaService.permissions.update({
      data: dataUpdate,
      where: {
        id,
      },
    });
  }

  public async remove(id: number) {
    const permissionExists = await this.prismaService.permissions.findFirst({
      where: {
        id,
      },
    });

    if (!permissionExists)
      throw new BadRequestException('Permissão já existente');

    return await this.prismaService.permissions.delete({
      where: {
        id,
      },
    });
  }
}

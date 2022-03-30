import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUser: CreateUserDto): Promise<CreateUserDto> {
    const userEntity = new User({...createUser})

    console.log(userEntity)
    return this.prisma.user.create({ data: createUser });
  }

  findAll(): Promise<CreateUserDto[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<CreateUserDto> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  remove(id: number): Promise<CreateUserDto> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}

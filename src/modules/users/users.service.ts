import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/prisma.service';
import {User, Prisma} from '@prisma/client';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    async registerUser(data:{name?: string, email: string, password: string}): Promise<User> {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return this.prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
                active: true
            },
        });
    }

    // Metodo requerido por AuthService
    async findOne(username: string) {
        return this.prisma.user.findUnique({
            where: { email: username },
        });
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({ where: { email } });
    }


     constructor(private readonly prisma: PrismaService) {}

    // async user( 
    //     userWhere: Prisma.UserWhereUniqueInput
    // ) {
    //     return this.prisma.user.findUnique({
    //         where: UserWhereUniqueInput,
    //     });
    // }

    // async user(params : {
    //     skip?: number;
    //     take?: number;
    //     cursor?: Prisma.UserWhereUniqueInput;
    //     where?: Prisma.UserWhereInput;
    //     orderBy?: Prisma.UserOrderByWithRelationInput;
    // }) : Promise<User[]> {
    //     const { skip, take, cursor, where, orderBy } = params;
    //     return this.prisma.user.findMany({
    //         skip,
    //         take,
    //         cursor,
    //         where,
    //         orderBy,
    //     });
    // }

    // async createUser(data: Prisma.UserCreateInput): Promise<User> {
    //     return this.prisma.user.create({
    //         data,
    //     });
    // }

    // async updateUser(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    //     return this.prisma.user.update({
    //         where: { id },
    //         data,
    //     });
    // }

    // async deleteUser(id: string): Promise<User> {
    //     return this.prisma.user.delete({
    //         where: { id },
    //     });
    // }

    }

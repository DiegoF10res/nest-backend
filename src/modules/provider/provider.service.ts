import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/prisma.service';

@Injectable()
export class ProviderService {
    constructor(private readonly prisma: PrismaService) { }

    async create(CreateProviderDto) {
        return this.prisma.provider.create({ data: CreateProviderDto });
    }

    async findAll() {
        return this.prisma.provider.findMany();
    }

    async findById(id: number) {
        return this.prisma.provider.findUnique({ where: { id } });
    }

}

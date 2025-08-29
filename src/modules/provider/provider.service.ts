import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/prisma.service';
import { UpdateProviderDto } from './dto/update-provider.dto';

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

    async update(id: number, updateProviderDto: UpdateProviderDto) {
        return this.prisma.provider.update({
            where: { id },
            data: updateProviderDto,
        });
    }

    async delete(id: number) {
        return this.prisma.provider.delete({ where: { id } });
    }

}

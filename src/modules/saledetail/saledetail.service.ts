import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/prisma.service';
import { CreateSaleDetailDto } from './dto/create-saledetail.dto';

@Injectable()
export class SaledetailService {

    constructor(private readonly prisma: PrismaService) {}

    async create(createSaleDetailDto: CreateSaleDetailDto) {
        return this.prisma.saleDetail.create({
            data: createSaleDetailDto,
        });
    }

    async findAll() {
        return this.prisma.saleDetail.findMany();
    }

    async findById(id: number) {
        return this.prisma.saleDetail.findUnique({
            where: { id },
        });
    }

    async update(id: number, data: Partial<CreateSaleDetailDto>) {
        return this.prisma.saleDetail.update({
            where: { id },
            data,
        });
    }

    async delete(id: number) {
        return this.prisma.saleDetail.delete({
            where: { id },
        });
    }

}
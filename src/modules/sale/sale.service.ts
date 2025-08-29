import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/prisma.service';
import { CreateSaleDto } from './dto/create-sale.dto';

@Injectable()
export class SaleService {

    constructor(private readonly prisma: PrismaService) {}

    async create(createSaleDto: CreateSaleDto) {
        return this.prisma.sale.create({
            data: {
                userId: createSaleDto.userId,
                branchId: createSaleDto.branchId,
                total: createSaleDto.total,
                details: {
                    create: createSaleDto.details
                }
            },
            include: {
                details: true
            }
        });
    }

    async findAll() {
        return this.prisma.sale.findMany({
            where: {userId: 1},
            include: {
                details: true
            }
        });
    }

    async findById(id: number) {
        return this.prisma.sale.findUnique({
            where: { id },
            include: {
                details: true
            }
        });
    }

    async findByUser(userId: number) {
        return this.prisma.sale.findMany({
            where: { userId },
            include: {
                details: true
            }
        });
    }

}

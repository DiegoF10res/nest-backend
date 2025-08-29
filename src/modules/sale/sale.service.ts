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

}

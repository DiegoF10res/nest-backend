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

}
    
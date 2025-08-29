import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/prisma.service';
// import { PrismaService } from '../../infrastructure/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';


@Injectable()
export class ProductService {
    constructor (private readonly prisma: PrismaService) {}

    async create ( createProductDto: CreateProductDto ) {
        return this.prisma.product.create({
            data: createProductDto,
        });
    }

    async findAll() {
        return this.prisma.product.findMany();
    }

    
}
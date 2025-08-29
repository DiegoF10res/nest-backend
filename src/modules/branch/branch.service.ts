import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/prisma.service';
import { CreateBranchDto } from './dto/create-branch.dto';

@Injectable()
export class BranchService {

    constructor(private readonly prisma: PrismaService) { }

    async create(createBranchDto: CreateBranchDto) {
        return this.prisma.branch.create({ 
            data: createBranchDto 
        });
    }

    async findAll() {
        return this.prisma.branch.findMany();
    }

}

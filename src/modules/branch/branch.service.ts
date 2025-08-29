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

    async findById(id: number) {
        return this.prisma.branch.findUnique({
            where: { id }
        });
    }

    async update(id: number, updateBranchDto: Partial<CreateBranchDto>) {
        return this.prisma.branch.update({
            where: { id },
            data: updateBranchDto
        });
    }

    async delete(id: number) {
        return this.prisma.branch.delete({
            where: { id }
        });
    }

}

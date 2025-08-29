import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/create-branch.dto';

@Controller('branch')
export class BranchController {

    constructor(private readonly branchService: BranchService) {}

    @Post()
    async createBranch(@Body() createBranchDto: CreateBranchDto) {
        return this.branchService.create(createBranchDto);
    }

    @Get()
    async findAll() {
        return this.branchService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.branchService.findById(Number(id));
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateBranchDto: Partial<CreateBranchDto>) {
        return this.branchService.update(Number(id), updateBranchDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.branchService.delete(Number(id));
    }

}

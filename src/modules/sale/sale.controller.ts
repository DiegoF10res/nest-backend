import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';

@Controller('sale')
export class SaleController {
    constructor(private readonly saleService: SaleService) {}

    @Post()
    async create(@Body() createSaleDto: CreateSaleDto) {

        return this.saleService.create(createSaleDto);
    }

    @Get()
    async findAll() {
        return this.saleService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return this.saleService.findById(id);
    }

    @Get('user/:userId')
    async findByUser(@Param('userId') userId: number) {
        return this.saleService.findByUser(userId);
    }

    @Get('branch/:branchId')
    async findByBranch(@Param('branchId') branchId: number) {
        return this.saleService.findByBranch(branchId);
    }

}
    
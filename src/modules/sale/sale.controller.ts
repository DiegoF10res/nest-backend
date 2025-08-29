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

}
    
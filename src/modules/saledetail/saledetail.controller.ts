import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SaledetailService } from './saledetail.service';
import { CreateSaleDetailDto } from './dto/create-saledetail.dto';

@Controller('saledetail')
export class SaledetailController {

    constructor(private readonly saledetailService: SaledetailService) {}

   @Post()
   async create(createSaleDetailDto: CreateSaleDetailDto) {
       return this.saledetailService.create(createSaleDetailDto);
   }

   @Get()
   async findAll() {
       return this.saledetailService.findAll();
   }

   @Get(':id')
   async findById(@Param('id') id: number) {
       return this.saledetailService.findById(id);
   }

   @Put(':id')
   async update(@Param('id') id: number, @Body() updateSaleDetailDto: CreateSaleDetailDto) {
       return this.saledetailService.update(id, updateSaleDetailDto);
   }

   @Delete(':id')
   async delete(@Param('id') id: number) {
       return this.saledetailService.delete(id);
   }

}

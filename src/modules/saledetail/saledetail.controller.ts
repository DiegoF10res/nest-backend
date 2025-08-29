import { Controller, Get, Param, Post } from '@nestjs/common';
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

}

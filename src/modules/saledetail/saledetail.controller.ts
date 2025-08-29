import { Controller, Post } from '@nestjs/common';
import { SaledetailService } from './saledetail.service';
import { CreateSaleDetailDto } from './dto/create-saledetail.dto';

@Controller('saledetail')
export class SaledetailController {

    constructor(private readonly saledetailService: SaledetailService) {}

   @Post()
   async create(createSaleDetailDto: CreateSaleDetailDto) {
       return this.saledetailService.create(createSaleDetailDto);
   }

}

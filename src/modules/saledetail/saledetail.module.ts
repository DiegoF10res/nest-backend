import { Module } from '@nestjs/common';
import { SaledetailService } from './saledetail.service';
import { SaledetailController } from './saledetail.controller';

@Module({
  providers: [SaledetailService],
  controllers: [SaledetailController]
})
export class SaledetailModule {}

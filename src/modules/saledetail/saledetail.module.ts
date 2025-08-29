import { Module } from '@nestjs/common';
import { SaledetailService } from './saledetail.service';
import { SaledetailController } from './saledetail.controller';
import { PrismaService } from 'src/infrastructure/prisma.service';

@Module({
  providers: [SaledetailService, PrismaService],
  controllers: [SaledetailController]
})
export class SaledetailModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProductModule } from './modules/product/product.module';
import { ProviderModule } from './modules/provider/provider.module';
import { BranchModule } from './modules/branch/branch.module';
import { SaleModule } from './modules/sale/sale.module';
import { SaledetailModule } from './modules/saledetail/saledetail.module';


@Module({
  imports: [AuthModule, UsersModule, ProductModule, ProviderModule, BranchModule, SaleModule, SaledetailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

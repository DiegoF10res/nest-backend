import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { FoodModule } from './food/food.module';

@Module({
  imports: [CatsModule, FoodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

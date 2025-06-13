import { Body, Controller, Get, Post, Param, NotFoundException, Patch, Delete, HttpCode } from '@nestjs/common';
import { FoodService } from './food.service';
import { Food } from './types/food.type';
import { FoodDto } from './types/food.dto';

@Controller('foods')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get()
  getFoods(): Food[] {
    return this.foodService.findAll();
  }

  @Post()
  createFood(@Body() createFoodDto: FoodDto): Food {
    return this.foodService.create(createFoodDto);
  }

  @Get(':id')
  getFoodById(@Param('id') id: string): Food {
    const food = this.foodService.findOne(Number(id));
    if (!food) {
      throw new NotFoundException('Food not found');
    }
    return food;
  }

  @Patch(':id')
  updateFoodName(@Param('id') id: string, @Body('name') name: string): Food {
    const food = this.foodService.updateName(Number(id), name);
    if (!food) {
      throw new NotFoundException('Food not found');
    }
    return food;
  }

  @Delete(':id')
  @HttpCode(204)
  deleteFood(@Param('id') id: string): void {
    const deleted = this.foodService.delete(Number(id));
    if (!deleted) {
      throw new NotFoundException('Food not found');
    }
  }
}

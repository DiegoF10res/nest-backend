import { Injectable } from '@nestjs/common';
import { Food } from './types/food.type';
import { FoodDto } from './types/food.dto';

@Injectable()
export class FoodService {
  #foods: Food[];

  constructor() {
    this.#foods = [
      {
        id: 1,
        name: 'Pizza',
        calories: 266,
      },
    ];
  }

  findAll(): Food[] {
    return this.#foods;
  }

  create(food: FoodDto): Food {
    const newFood = {
      id: this.#foods.length + 1,
      ...food,
    };
    this.#foods.push(newFood);
    return newFood;
  }

  findOne(id: number): Food | undefined {
    return this.#foods.find(food => food.id === id);
  }

  updateName(id: number, name: string): Food | undefined {
    const food = this.#foods.find(food => food.id === id);
    if (food) {
      food.name = name;
    }
    return food;
  }

  delete(id: number): boolean {
    const index = this.#foods.findIndex(food => food.id === id);
    if (index !== -1) {
      this.#foods.splice(index, 1);
      return true;
    }
    return false;
  }
}

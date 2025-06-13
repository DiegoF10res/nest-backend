import { Body, Controller, Get, Post, Param, NotFoundException } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './types/cat.type';
import { CatDto } from './types/cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get() //Genera una ruta de tipo GET /cats
    getCats(): Cat[] {
        return this.catsService.findAll();
    }

    @Post() //Genera una ruta de tipo POST /cats
    createCat(@Body() createCatDto: CatDto): Cat {
        return this.catsService.create(createCatDto);
    }

    @Get(':id') // GET /cats/:id
    getCatById(@Param('id') id: string): Cat {
        const cat = this.catsService.findOne(Number(id));
        if (!cat) {
            throw new NotFoundException('Cat not found');
        }
        return cat;
    }
}

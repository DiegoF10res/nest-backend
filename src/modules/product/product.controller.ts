import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.productService.findById(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: CreateProductDto) {
        return this.productService.update(+id, updateProductDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.productService.delete(+id);
    }

    @Get('provider/:providerId')
    findByProviderId(@Param('providerId') providerId: string) {
        return this.productService.findByProviderId(+providerId);
    }

}

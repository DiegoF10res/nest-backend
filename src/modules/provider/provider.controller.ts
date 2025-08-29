import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';

@Controller('provider')
export class ProviderController {

    constructor(private readonly providerService: ProviderService) {}

    @Post()
    async createProvider(@Body() createProviderDto: CreateProviderDto) {
        return this.providerService.create(createProviderDto);
    }

    @Get()
    async findAllProviders() {
        return this.providerService.findAll();
    }

    @Get(':id')
    async findProviderById(@Param('id') id: string) {
        return this.providerService.findById(Number(id));
    }
    
    @Patch(':id')
    async updateProvider(@Param('id') id: string, @Body() updateProviderDto: UpdateProviderDto) {
        return this.providerService.update(Number(id), updateProviderDto);
    }

    @Delete(':id')
    async deleteProvider(@Param('id') id: string) {
        return this.providerService.delete(Number(id));
    }

}

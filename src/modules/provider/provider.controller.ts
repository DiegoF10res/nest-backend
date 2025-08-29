import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { CreateProviderDto } from './dto/create-provider.dto';

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

}

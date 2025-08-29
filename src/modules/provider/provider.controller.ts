import { Body, Controller, Post } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { CreateProviderDto } from './dto/create-provider.dto';

@Controller('provider')
export class ProviderController {

    constructor(private readonly providerService: ProviderService) {}

    @Post()
    async createProvider(@Body() createProviderDto: CreateProviderDto) {
        return this.providerService.create(createProviderDto);
    }

}
